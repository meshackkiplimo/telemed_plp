//import
const db = require("../config/database");
const bcrypt = require("bcryptjs");

//user registration logic
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check user does not exist
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res
        .status(400)
        .json({ message: "User already exists. Please proceed to login." });
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 15);
    //insert user in db
    console.log(hashedPassword);
    await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?) ",
      [name, email, hashedPassword]
    );
    //redirect to homepage

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};
// user login logic
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Check if the user exists
//     const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
//       email,
//     ]);
//     if (rows.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "User not found. Please register." });
//     }

//     // Get the user's hashed password from the database
//     const user = rows[0];
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     // If the password is not valid, return an error
//     if (!isPasswordValid) {
//       return res
//         .status(400)
//         .json({ message: "Invalid credentials. Please try again." });
//     }

//     // Successful login - redirect to the homepage or dashboard
//     res.redirect("/");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error", error });
//   }
// };
