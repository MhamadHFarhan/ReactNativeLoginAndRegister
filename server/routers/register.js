const express = require("express");
const { createUser } = require("../controllers/register");
const login = require("../controllers/login");

const registerRouter = express.Router();

registerRouter.post("/", createUser, login);

module.exports = registerRouter;
