const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const uuid = require("uuid");
const UserDto = require("../dtos/user-dto");
const tokenService = require("./token-service");
const ApiError = require("../exceptions/api-error");
const emailService = require("./email-service");

class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `The user with email address ${email} already registered.`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await emailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await userModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest(
        "Activation error. Activation link is incorrect."
      );
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest(`User with email: ${email} is not registered.`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Password is not correct.");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.Unauthorized();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.Unauthorized();
    }
    const user = await userModel.findById(userData.id);
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
  async getUser() {}

  async restore(email) {
    const userData = await userModel.findOne({ email });
    if (!userData) {
      throw ApiError(`Email ${email} is not registered.`);
    }
    const activationLink = uuid.v4();
    userData.activationLink = activationLink;
    userData.save();

    await emailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/forgot-password/${activationLink}`
    );
    const userDto = new UserDto(userData);
    return { user: userDto };
  }

  async verification(activationLink) {
    const userData = await userModel.findOne({ activationLink });
    if (!userData) {
      throw ApiError.BadRequest(
        "Activation error. Activation link is incorrect."
      );
    }
    const userDto = new UserDto(userData);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async reset() {}
}

module.exports = new UserService();
