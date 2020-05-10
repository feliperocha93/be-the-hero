const express = require("express");
const jwt = require('jsonwebtoken');
const { celebrate, Segments, Joi } = require('celebrate');

const authMiddleware = require('./auth');

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.post("/ongs", celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(8),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);

// Daqui para baixo deve ser rotas privadas

routes.use(authMiddleware);

routes.get("/ongs", OngController.index);

routes.get("/profile", celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index);

routes.get("/incidents", celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentController.index);
routes.post("/incidents", IncidentController.create);

routes.delete("/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      id: Joi.required(),
      ongid: Joi.required()
    })
  }), IncidentController.delete);

module.exports = routes;
