const express = require("express");
const router = express.Router();

router.get("/usuario", (request, response) => {

    response.status(200).json({
        "message": "Estás dentro de la API GET General de Usuario"
    });

});

//API CON PARÁMETROS OBLIGATORIOS
router.get("/usuario/:id/:nombre/:apellido/:edad", (request, response) => {

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

router.post("/usuario", (request, response) => {

    response.status(200).json({
        "message": "Estás dentro de la API POST de usuario"
    });

});

router.put("/usuario", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API PUT de usuario"
    });

});

router.delete("/usuario", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API DELETE de usuario"
    });
});

module.exports = router;