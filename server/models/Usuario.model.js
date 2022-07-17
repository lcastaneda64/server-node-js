const mongoose = require("mongoose");
const mongooseHidden = require('mongoose-hidden')();

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Es necesario ingresar el nombre"]
    },
    
    apellidos: {
        type: String,
        required: [true, "Es necesario ingresar los apellidos"]
    },

    correoElectronico: {
        type: String,
        required: [true, "Es necesario ingresar el correo electrónico"]
    },

    password: {
        type: String,
        required: [true, "Es necesario ingresar la contraseña"]
    },

    edad: Number,
    curp: String
});

UsuarioSchema.plugin(mongooseHidden, {hidden: {password: true, _id: false}});

module.exports = mongoose.model("usuario", UsuarioSchema);