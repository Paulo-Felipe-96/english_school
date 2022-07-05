const people = require("./personRoutes");
const levels = require("./levelRoutes");
const schoolClasses = require("./schoolClassRoutes");
const express = require("express");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome!" });
  });

  app.use(express.json(), people, levels, schoolClasses);
};

module.exports = routes;
