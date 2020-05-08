const connection = require("../database/connection");
const bcrypt = require("../utils/bcrypt");
const nodemailer = require("../utils/nodemailer");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, password, whatsapp, city, uf } = request.body;

    const encryptedPassword = bcrypt.encryptPassword(password);

    try {
      await connection("ongs").insert({
        name,
        email,
        password: encryptedPassword,
        whatsapp,
        city,
        uf
      });

      nodemailer.sendPassword(email, password);
    } catch (error) {
      return response.json(error);
    }

    return response.sendStatus(200).json(email);
  }
};
