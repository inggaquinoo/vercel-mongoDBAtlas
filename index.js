const express = require("express")
const mongoose = require("mongoose")

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("*",(req, res)=>{
    res.send("Hola Tavo, tú estas conectado exitosamente a MongoDB")
});

module.exports = app;
