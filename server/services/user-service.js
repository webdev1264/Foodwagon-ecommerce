const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const uuid = require("uuid");
const UserDto = require("../dtos/user-dto");
const tokenService = require("./token-service");

class UserService {
  async registration(email, password) {
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async login() {}
  async logout() {}
  async activate() {}
  async refresh() {}
  async getUser() {}
}

module.exports = new UserService();
