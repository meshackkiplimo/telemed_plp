const mysql = require("mysql2");
require("dotenv").config();

// create a pool  of connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
//database connection console
pool.getConnection((err, connection) => {
  if (err) {
    console.error("error connecting:", err);
    return;
  }
  console.log("connected to the database");
});

//export
module.exports = pool.promise();
