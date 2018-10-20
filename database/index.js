const mysql = require("mysql")
const sequel = require("sequelize")

const connection = new sequel("4to5", "root", "hackreactor25", {
  "host":"localhost",
  "dialect":"mysql"
})

connection.authenticate()
  .then(() => {console.log("mysql server connected")})
  .catch((err) => {console.log(err)})

module.exports = connection;