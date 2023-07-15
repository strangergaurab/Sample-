var mysql = require("mysql");
module.exports = async function () {
  return new Promise((res, rej) => {
    let db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
    });
    db.connect(function (err) {
      if (err) {
        console.log("Error connecting to Db");
        return;
      }
      db.query(
        "CREATE DATABASE IF NOT EXISTS " + process.env.DB_NAME,
        function (err, result) {
          if (err) {
            console.log("Error creating database");
            return;
          }
          let mysqlConnection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: process.env.DB_NAME,
            multipleStatements: true,
          });
          mysqlConnection.connect(function (err) {
            if (err) {
              rej(err);
            } else {
              res(mysqlConnection);
            }
          });
        }
      );
    });
  });
};
