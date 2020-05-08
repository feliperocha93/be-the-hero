const connection = require("../database/connection");
const bcrypt = require("../utils/bcrypt");

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const ong = await connection("ongs")
      .where({ "email": email })
      .select("id", "name", "password")
      .first();

    const passwordCorrect = bcrypt.comparePasswrod(password, ong.password);

    if (!passwordCorrect) {
      return response.status(400).json({ error: "Email or password incorrect." });
    }

    return response.json(ong);
  }
};
