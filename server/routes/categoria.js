const express = require("express");
const router = express.Router();

router.get("/categoria", (request, response) => {

   
 response.status(200).json({
        "message": "Estás dentro de la API GET categoria"
    });

});

router.post("/categoria", (request, response) => {

    response.status(200).json({
        "message": "Estás dentro de la API POST de categoria"
    });

});

router.put("/categoria", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API PUT de categoria"
    });

});

router.delete("/categoria", (req, res) => {

    res.status(200).json({
        "message": "Estás dentro de la API DELETE de categoria"
    });
});

module.exports = router;