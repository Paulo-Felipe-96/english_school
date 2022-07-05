const { Router } = require("express");
const {
  pegaTodasAsTurmas,
  pegaUmaTurma,
  criaTurma,
  atualizaTurma,
  apagaTurma,
} = require("../controllers/SchoolClassController");

const router = Router();

router
  .get("/turmas", pegaTodasAsTurmas)
  .get("/turmas/:id", pegaUmaTurma)
  .post("/turmas", criaTurma)
  .put("/turmas/:id", atualizaTurma)
  .delete("/turmas/:id", apagaTurma);

module.exports = router;
