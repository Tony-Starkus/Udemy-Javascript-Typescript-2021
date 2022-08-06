import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Thalisson",
      sobrenome: "Bandeira",
      email: "thalisson.bandeira@hotmail.com",
      idade: 23,
      peso: 76,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
