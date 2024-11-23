const express = require("express");
const app = express();

const path = require("path");
const authRoutes = require("./routes/auth");

//set up middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up routes
// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "login.html")); // Ensure login.html is in the public folder
//   });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//use auth
app.use("/auth", authRoutes);

//port connection from the db
const PORT = process.env.PORT || 3002;

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on  http://127.0.0.2:${PORT}`);
});
