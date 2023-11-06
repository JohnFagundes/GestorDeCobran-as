const Joi = require("joi");

const clientSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "O campo Nome é obrigatório",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "O campo Email é obrigatório",
    "string.email": "O campo Email precisa ter um formato válido",
  }),
  cpf: Joi.string().min(11).required().messages({
    "any.required": "O campo CPF é obrigatório",
    "string.min": "O CPF precisa conter, no mínimo, 11 caracteres",
  }),
  phone: Joi.string().min(9).required().messages({
    "any.required": "O campo Telefone é obrigatório",
    "string.min": "O Telefone precisa conter, no mínimo, 11 caracteres",
  }),
  zipcode: Joi.string(),
  streetname: Joi.string(),
  streetnumber: Joi.string(),
  additionalinfo: Joi.string(),
  neighborhood: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
});

module.exports = clientSchema;
