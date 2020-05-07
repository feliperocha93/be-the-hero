const cryptr = require("../utils/cryptr")
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, password, whatsapp, city, uf } = request.body;

    const encryptedPassword = cryptr.encryptPassword(password);

    await connection("ongs").insert({
      name,
      email,
      password: encryptedPassword,
      whatsapp,
      city,
      uf
    });
    //Retorno do método insert pode demorar, por isso a função é assíncrona

    return response.json({ email });
  }
};
