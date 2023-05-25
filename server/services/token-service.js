const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model");
const ApiError = require("../exceptions/api-error");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  generateResetToken(payload) {
    const resetToken = jwt.sign(payload, process.env.JWT_RESET_SECRET, {
      expiresIn: process.env.JWT_RESET_EXPIRES_IN,
    });
    return resetToken;
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async findToken(token) {
    const userData = tokenModel.findOne(token);
    return userData.refreshToken;
  }

  async removeToken(refreshToken) {
    const token = await tokenModel.deleteOne({ refreshToken });
    return token;
  }

  validateAccessToken(accessToken) {
    const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    return userData;
  }

  validateRefreshToken(refreshToken) {
    const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    return userData;
  }

  validateResetToken(token) {
    const userData = jwt.verify(token, process.env.JWT_RESET_SECRET);
    return userData;
  }
}

module.exports = new TokenService();
