const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {

   
 response.status(200).json({
        "message": "Estás dentro de la API GET categoria"
    });

});

router.post("/", (request, response) => {

    response.status(200).json({
        "message": "Estás dentro de la API POST de categoria"
    });

});

router.put("/", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API PUT de categoria"
    });

});

router.delete("/", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API DELETE de categoria"
    });
});

module.exports = router;