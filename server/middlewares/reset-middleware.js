const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token-service");

module.exports = async function (req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenService.findToken({ refreshToken });
    if (!userData || !tokenFromDB) {
      throw ApiError.Unauthorized();
    }
    next();
  } catch (e) {
    ApiError.BadRequest("Access error.");
  }
};
