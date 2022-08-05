const express = require("express");
const mongoose = require("mongoose");
require("colors");
require("./config/config");
const app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", routes);

mongoose.connect(process.env.URLDB, {})
.then(() => {
    console.log("[MONGODB] ".green + "DATABASE CONNECTION SUCCESSFULLY");
})
.catch((err) => {
    console.log("[MONGODB] ".red + "CONNECTION FAILED " + err);
});

app.listen(process.env.PORT, () => {
    console.log("[NODEJS]".green + " LISTEN TO PORT: " + process.env.PORT.blue);
});
const fs = require('fs');
const path = require('path');