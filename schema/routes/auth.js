// import
const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authController");
// for middleware validation
// const { validateRegister } = require("../middleware/validation");

/// user register
router.post("/register", registerUser);

module.exports = router;
