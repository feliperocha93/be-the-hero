const connection = require("../database/connection");
const bcrypt = require("../utils/bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const { id, name, password: encryptedPassword } = await connection("ongs")
      .where({ "email": email })
      .select("id", "name", "password")
      .first();

    const passwordCorrect = bcrypt.comparePasswrod(password, encryptedPassword);

    if (!passwordCorrect) {
      return response.status(400).json({ error: "Email or password incorrect." });
    }

    return response.json({ id, name, token: jwt.sign({}, 'PRIVATEKEY') });
  }
};
