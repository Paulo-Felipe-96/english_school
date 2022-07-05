const { Router } = require("express");
const {
  listAllPeople,
  findPersonById,
  createPerson,
  updatePersonById,
  deletePersonById,
  findEnrollmentById,
  createEnrollment,
  updateEnrollmentById,
  deleteEnrollmentById,
} = require("../controllers/PersonController");

const router = Router();

router
  .get("/pessoas", listAllPeople)
  .get("/pessoas/:id", findPersonById)
  .post("/pessoas", createPerson)
  .put("/pessoas/:id", updatePersonById)
  .delete("/pessoas/:id", deletePersonById)
  .get("/pessoas/:estudanteId/matricula/:matriculaId", findEnrollmentById)
  .post("/pessoas/:estudanteId/matricula", createEnrollment)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", updateEnrollmentById)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", deleteEnrollmentById);

module.exports = router;
