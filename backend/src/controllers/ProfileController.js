const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongId = request.query.id;

    const incidents = await connection("incidents")
      .where("ong_id", ongId)
      .select("*");

    return response.json(incidents);
  }
};
