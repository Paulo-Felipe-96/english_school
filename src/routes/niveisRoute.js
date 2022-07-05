const { Router } = require("express");
const {
  pegaTodosOsNiveis,
  pegaUmNivel,
  criaNivel,
  atualizaNivel,
  apagaNivel,
} = require("../controllers/NivelController");

const router = Router();

router
  .get("/niveis", pegaTodosOsNiveis)
  .get("/niveis/:id", pegaUmNivel)
  .post("/niveis", criaNivel)
  .put("/niveis/:id", atualizaNivel)
  .delete("/niveis/:id", apagaNivel);

module.exports = router;
