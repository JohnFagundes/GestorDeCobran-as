const router = require("express").Router();

const users = require("./controllers/users");
const clients = require("./controllers/clients");

const { getAddressByCEP } = require("./controllers/cep");

const authorizeLogin = require("./middlewares/authorizeLogin");
const requestBodyValidate = require("./middlewares/requestBodyValidate");

const userSchema = require("./schemas/user");
const userEmailExistsSchema = require("./schemas/userEmailExists");
const loginSchema = require("./schemas/login");
const editUserSchema = require("./schemas/editUser");
const cepSchema = require("./schemas/cep");
const clientSchema = require("./schemas/client");

router.get("/queries/cep", requestBodyValidate(cepSchema), getAddressByCEP);

router.post(
  "/users/email",
  requestBodyValidate(userEmailExistsSchema),
  users.userEmailExists
);
router.post("/users", requestBodyValidate(userSchema), users.registerUser);
router.post("/users/login", requestBodyValidate(loginSchema), users.login);

router.use(authorizeLogin);

router.patch("/users", requestBodyValidate(editUserSchema), users.editUser);

router.post(
  "/clients",
  requestBodyValidate(clientSchema),
  clients.registerClients
);

module.exports = router;
