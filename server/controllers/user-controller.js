const ApiError = require("../exceptions/api-error");
const userService = require("../services/user-service");
const { validationResult } = require("express-validator");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async orders(req, res, next) {
    try {
      res.json(["Hello world"]);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
