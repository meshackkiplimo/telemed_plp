// import
const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authController");
// user login

// for middleware validation
// const { validateRegister } = require("../middleware/validation");

/// user register
router.post("/register", registerUser);

//user login
// router.post("/login", loginUser);

module.exports = router;
