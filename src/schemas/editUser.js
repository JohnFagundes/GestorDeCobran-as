const joi = require("joi");

const editUserSchema = joi.object({
  username: joi.string().required().messages({
    "any.required": "O campo Nome é obrigatório ",
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório ",
    "string.email": "O campo email precisa ter um formato válido",
  }),
  cpf: joi.string().min(11).messages({
    "string.min": "O CPF precisa conter, no mínimo, 11 caracteres",
  }),
  phone: joi.string().min(11).messages({
    "string.min": "O Telefone precisa conter, no mínimo, 11 caracteres",
  }),
});

module.exports = editUserSchema;
