const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token-service");

module.exports = async function (req, res, next) {
  try {
    next();
  } catch (e) {
    ApiError.BadRequest("Access error.");
  }
};
