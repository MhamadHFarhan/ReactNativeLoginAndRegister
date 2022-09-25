const express = require("express");
const { createUser } = require("../controllers/register");

const registerRouter = express.Router();

registerRouter.post("/", createUser);

module.exports = registerRouter;
