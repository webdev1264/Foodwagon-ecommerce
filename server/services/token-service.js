const jwt = require("jsonwebtoken");
const refreshTokenModel = require("../models/refresh-token-model");
const resetTokenModel = require("../models/reset-token-model");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
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

  async saveRefreshToken(userId, refreshToken) {
    const tokenData = await refreshTokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }
    const token = await refreshTokenModel.create({
      user: userId,
      refreshToken,
    });
    return token;
  }

  async saveResetToken(userId, resetToken) {
    const tokenData = await resetTokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.resetToken = resetToken;
      return await tokenData.save();
    }
    const token = await resetTokenModel.create({ user: userId, resetToken });
    return token;
  }

  async findRefreshToken(refreshToken) {
    const tokenData = await refreshTokenModel.findOne({ refreshToken });
    return tokenData;
  }

  async findResetToken(resetToken) {
    const tokenData = await resetTokenModel.findOne({ resetToken });
    return tokenData;
  }

  async removeRefreshToken(refreshToken) {
    const token = await refreshTokenModel.deleteOne({ refreshToken });
    return token;
  }

  async removeResetToken(resetToken) {
    const token = await resetTokenModel.deleteOne({ resetToken });
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
