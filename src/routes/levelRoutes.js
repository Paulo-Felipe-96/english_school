const { Router } = require("express");
const {
  createLevel,
  deleteLevelById,
  findLevelById,
  listAllLevels,
  updateLevelById,
} = require("../controllers/LevelController");

const router = Router();

router
  .get("/niveis", listAllLevels)
  .get("/niveis/:id", findLevelById)
  .post("/niveis", createLevel)
  .put("/niveis/:id", updateLevelById)
  .delete("/niveis/:id", deleteLevelById);

module.exports = router;
