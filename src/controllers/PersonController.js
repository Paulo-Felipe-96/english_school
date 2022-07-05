const database = require("../models");

class PersonController {
  static async listAllPeople(req, res) {
    try {
      const people = await database.Pessoas.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findPersonById(req, res) {
    const { id } = req.params;
    try {
      const person = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createPerson(req, res) {
    const person = req.body;
    try {
      const createdPerson = await database.Pessoas.create(person);
      return res.status(200).json(createdPerson);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePersonById(req, res) {
    const { id } = req.params;
    const person = req.body;
    try {
      await database.Pessoas.update(person, { where: { id: Number(id) } });
      const updatedPerson = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletePersonById(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentById(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const enrollment = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createEnrollment(req, res) {
    const { estudanteId } = req.params;
    const enrollment = { ...req.body, estudante_id: Number(estudanteId) };

    try {
      const createdEnrollment = await database.Matriculas.create(enrollment);
      return res.status(200).json(createdEnrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateEnrollmentById(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const enrollment = req.body;

    try {
      await database.Matriculas.update(enrollment, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });

      const updatedEnrollment = await database.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(updatedEnrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteEnrollmentById(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
