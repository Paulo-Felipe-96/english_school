const { Router } = require("express");
const {
  pegaTodasAsPessoas,
  pegaUmaPessoa,
  criaPessoa,
  atualizaPessoa,
  apagaPessoa,
  pegaUmaMatricula,
  criaMatricula,
  atualizaMatricula,
  apagaMatricula,
} = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", pegaTodasAsPessoas)
  .get("/pessoas/:id", pegaUmaPessoa)
  .post("/pessoas", criaPessoa)
  .put("/pessoas/:id", atualizaPessoa)
  .delete("/pessoas/:id", apagaPessoa)
  .get("/pessoas/:estudanteId/matricula/:matriculaId", pegaUmaMatricula)
  .post("/pessoas/:estudanteId/matricula", criaMatricula)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", atualizaMatricula)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", apagaMatricula);

module.exports = router;
