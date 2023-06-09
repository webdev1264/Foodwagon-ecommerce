const ApiError = require("../exceptions/api-error");
const userService = require("../services/user-service");
const { validationResult } = require("express-validator");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest(
            "Your Email must be correct and Password length should be at least 6 characters.",
            errors.array()
          )
        );
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      return res.json(userData);
    } catch (e) {
      next(e); 
    }
  }

  async orders(req, res, next) {
    try {
      return res.json(["Hello world"]);
    } catch (e) {
      next(e);
    }
  }

  async restore(req, res, next) {
    try {
      const { email } = req.body;
      const userData = await userService.restore(email);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async reset(req, res, next) {
    try {
      const { userId, password, resetToken } = req.body;
      const userData = await userService.reset(userId, password, resetToken);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
