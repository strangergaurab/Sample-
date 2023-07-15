require("dotenv").config();
const mysql = require("mysql2");
const conn = require("./db_connection");

const table = require("./query");

_initCreateTable();

function _initCreateTable() {
  const prefix = process.env.DB_NAME;

  if (!(conn instanceof mysql.Connection)) {
    console.log("Connection is not an instance of mysql.Connection");
    return;
  }
  if (conn === null) {
    console.log("Connection is null");
    return;
  }

  const name_table_user = prefix + "_user";
  table(
    conn,
    `CREATE TABLE IF NOT EXISTS ` +
      name_table_user +
      ` (UID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255), username VARCHAR(255), password VARCHAR(255), profile_url VARCHAR(255), phone_number BIGINT(16), ip_address VARCHAR(25), user_agent VARCHAR(255))`
  );

  const name_table_name = prefix + "_name";
  table(
    conn,
    `CREATE TABLE IF NOT EXISTS ` +
      name_table_name +
      `(name_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, UID INT, CONSTRAINT FOREIGN KEY(UID) REFERENCES ` +
      name_table_user +
      `(UID), firstname VARCHAR(55), middlename VARCHAR(50), lastname VARCHAR(50))`
  );

  const name_table_address = prefix + "_address";
  table(
    conn,
    `CREATE TABLE IF NOT EXISTS ` +
      name_table_address +
      `(aid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, UID INT, CONSTRAINT FOREIGN KEY(UID) REFERENCES ` +
      name_table_user +
      `(UID), country VARCHAR(50), state VARCHAR(50), address_line1 VARCHAR(50), address_line2 VARCHAR(50), city VARCHAR(50), postal_code VARCHAR(30))`
  );

  const login_table_name = prefix + "_login";
  // Create login table if it doesn't exist   
  table(
    conn,
    `CREATE TABLE IF NOT EXISTS ` +
      login_table_name +
      ` (login_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, UID INT, CONSTRAINT FOREIGN KEY (UID) REFERENCES ` +
      name_table_user +
      `(UID), created_at DATETIME NOT NULL, token VARCHAR(255) NOT NULL, expire_at DATETIME NOT NULL, ip_address VARCHAR(255) NOT NULL, user_agent VARCHAR(255) NOT NULL)`
  );
}

// Remaining code removed as it seemed to be duplicated and unnecessary
