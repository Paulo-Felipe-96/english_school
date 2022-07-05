const config = require("dotenv/config");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
const rootUserName = process.env.MYSQL_ROOT;
const rootPassword = process.env.MYSQL_ROOT_PASSWORD;
const appUserName = process.env.MYSQL_USER;
const appPassword = process.env.MYSQL_PASSWORD;
const databaseName = process.env.MYSQL_DATABASE;

module.exports = {
  port,
  host,
  rootUserName,
  rootPassword,
  appUserName,
  appPassword,
  databaseName,
};
