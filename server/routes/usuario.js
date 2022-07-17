const express = require("express");
const observador = require("../middlewares/observador");
const router = express.Router();
const UsuarioModel = require('../models/Usuario.model');
const jwt = require('jsonwebtoken');
const verificaToken = require("../middlewares/verificaToken");

router.get("/",[verificaToken], (req, resp) => {

    UsuarioModel.find()
    .then((usuarios) => {

        return resp.status(200).json({
            msg: "Se consultaron los usuarios exitosamente",
            status: 200,
            cont: {
                usuarios
            }
        });

    })
    .catch((err) => {
        return resp.status(500).json({
            msg: "Error al consultar los usuarios.",
            status: 500,
            cont: {
                error: err
            }
        });
    });

});

//API CON PARÁMETROS OBLIGATORIOS
router.get("/:id/:nombre/:apellido/:edad", (request, response) => {

    //DECLARACIÓN INDIVIDUAL
    // const id = request.params.id;
    // const nombre = request.params.nombre;
    // const edad = request.params.edad;
    // const apellido = request.params.apellido;

    //DESESTRUCTURACIÓN
    const {id, nombre, edad, apellido } = request.params;

    //"22" == 22 -> true (Validación no estricta - Verifica solamente el valor)
    //"22" === 22 -> false (Validación estricta - Verifica valor y tipo de dato)
  
    if(Number(edad).toString() === "NaN") {
        return response.status(400).json({
            "message": "El valor ingresado en la edad es inválido"
        });
    }

    return response.status(200).json({
        "message": "Estás dentro de la API GET específico de Usuario",
        id,
        nombre,
        edad: Number(edad),
        apellido
    });
});

//API CON PARÁMETROS OPCIONALES
router.get("/usuarioBusqueda", (req, resp) => {

    const id = req.query.id; //Parámetro opcional
    const nombre = req.query.nombre;

    resp.status(200).json({
        "message": "Se consultó la API usuarioBusqueda exitosamente",
        id,
        nombre
    });
});

router.post("/", (req, resp) => {

    const usuario = new UsuarioModel(req.body);

    usuario.save()
    .then((usuarioRegistrado) => {
        return resp.status(200).json({
            msg: "Usuario registrado exitosamente",
            status: 200,
            cont: {
                usuario: usuarioRegistrado
            }
        });
    })
    .catch((err) => {
        return resp.status(500).json({
            msg: "Error al registrar el usuario",
            status: 500,
            cont: {
                error: err
            }
        });
    });

});

router.put("/", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API PUT de usuario"
    });

});

router.delete("/", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API DELETE de usuario"
    });
});

router.post("/login", (req, resp) => {

    const {strCorreo, strPassword} = req.body;

    UsuarioModel.findOne({correoElectronico: strCorreo, password: strPassword})
    .then((usuario) => {    

        if(usuario === null) {
            return resp.status(400).json({
                msg: "El correo y/o contraseña son incorrectos",
                status: 400,
                cont: {
                    usuario: null
                }
            });

        } else {
            const token = jwt.sign({usuario}, process.env.AUTH_SEED, {expiresIn: "24h"});
            return resp.status(200).json({
                msg: "Usuario ingresó exitosamente",
                status: 200,
                cont: {
                    token
                }
            });
        }

    })
    .catch((err) => {

        return resp.status(500).json({
            msg: "Error al ingresar.",
            status: 500,
            cont: {
                error: err.message
            }
        });
    });

});

module.exports = router;