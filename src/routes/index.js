const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");
const express = require("express");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome!" });
  });

  app.use(express.json(), pessoas, niveis, turmas);
};

module.exports = routes;
