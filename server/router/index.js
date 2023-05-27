const { Router } = require("express");
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);
router.post("/password-forgot", userController.restore);
router.post("/password-reset", userController.reset);
router.get("/activate/:link", userController.activate);
router.get("/orders", userController.orders); //list of all the orders

module.exports = router;
