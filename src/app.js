const express = require("express");
const routes = require("./routes");
const { port } = require("./config");

const app = express();

routes(app);

try {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
} catch (error) {
  throw new Error(error);
}

module.exports = app;
