const express = require("express");
require("colors");
const app = express();
const usuario = require("./routes/usuario");
const categoria = require("./routes/categoria");

app.use(usuario);
app.use(categoria);

app.listen(3000, () => {
    console.log("ONLINE ".green + "LISTEN TO PORT: " + "3000".blue);
});
