const knex = require("../config/knex.conf");
const cpfValidate = require("../util/cpfValidate");

async function registerClients(req, res) {
  const {
    name,
    email,
    cpf,
    phone,
    zipcode,
    streetname,
    streetnumber,
    additionalinfo,
    neighborhood,
    city,
    state,
  } = req.body;

  try {
    const emailExists = await knex("clients").where({ email }).first();
    if (emailExists) {
      return res.status(400).json({ message: "O email já está cadastrado" });
    }

    const validCPF = cpfValidate(cpf);

    if (!validCPF) {
      return res.status(400).json({ message: "CPF inválido" });
    }

    const clientCPFExists = await knex("clients").where({ cpf }).first();

    if (clientCPFExists) {
      return res.status(400).json({ message: "O CPF já existe" });
    }

    const client = await knex("clients")
      .insert({
        name,
        email,
        cpf: validCPF,
        phone,
        zipcode,
        streetname,
        streetnumber,
        additionalinfo,
        neighborhood,
        city,
        state,
      })
      .returning("*");

    if (!client) {
      return res.status(400).json({ message: "O cliente não foi cadastrado" });
    }

    return res.status(201).json({ client });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao registrar o cliente" });
  }
}

module.exports = {
  registerClients,
};
