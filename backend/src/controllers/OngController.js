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

    const verifyEmail = await connection("ongs").select("id").where("email", email).first();

    if (verifyEmail !== undefined) {
      console.error(`Email duplicated: ${email} already exist`);
      return response.send({ error: 'Este e-mail já está cadastrado' });
    }

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

    return response.status(200).send(email);
  }
};
