const database = require("../models");

class LevelController {
  static async listAllLevels(req, res) {
    try {
      const allLevels = await database.Niveis.findAll();
      return res.status(200).json(allLevels);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findLevelById(req, res) {
    const { id } = req.params;
    try {
      const level = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createLevel(req, res) {
    const level = req.body;
    try {
      const createdLevel = await database.Niveis.create(level);
      return res.status(200).json(createdLevel);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateLevelById(req, res) {
    const { id } = req.params;
    const level = req.body;
    try {
      await database.Niveis.update(level, { where: { id: Number(id) } });
      const updatedLevel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedLevel);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteLevelById(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = LevelController;
