const { rootUserName, rootPassword, databaseName, host } = require("./index");

module.exports = {
  development: {
    username: rootUserName,
    password: rootPassword,
    database: databaseName,
    host: host,
    dialect: "mysql",
  },
  test: {
    username: rootUserName,
    password: rootPassword,
    database: databaseName,
    host: host,
    dialect: "mysql",
  },
  production: {
    username: rootUserName,
    password: rootPassword,
    database: databaseName,
    host: host,
    dialect: "mysql",
  },
};
