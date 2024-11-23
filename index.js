const express = require("express");
const app = express();

const path = require("path");
const authRoutes = require("./routes/auth");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on  http://127.0.0.2:${PORT}`);
});
