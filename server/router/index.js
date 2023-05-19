const Router = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");

const router = new Router();

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.register
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/orders", userController.orders); //list of all the orders

module.exports = router;
