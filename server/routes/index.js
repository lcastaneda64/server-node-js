const express = require('express');
const app = express();
const usuario = require("./usuario");
const categoria = require("./categoria");
const observador = require('../middlewares/observador');

app.use("/usuario",[], usuario);
app.use("/categoria", categoria);

module.exports = app;