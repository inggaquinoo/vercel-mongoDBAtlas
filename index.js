const express = require('express')
const mongoose = require('mongoose')
const app = express();
//Modified 6/9/2023
//CORS: Nos permite hacer solicitudes desde un origen diferente
const cors = require('cors');

app.use(cors());

app.use(express.json());


app.get("/",(req, res)=>{
    res.send("Hola Tavo, tú estas conectado exitosamente a MongoDB - 17/5/2023")
});

app.use('/api/houses', houses);

require('dotenv').config();

//Se lee: sino tenemos el puerto en nuestro archivo .env
//el puerto se establecerá en 3000
const port = process.env.PORT || 3000;

//Se reemplazan los valores por las variables de entorno las cuales se encuentran
//en el archivo .env
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eyoebix.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true})
    //Si conecta sin problemas
    .then(result => {
    //se usa comilla invertida para poder introducir un valor dinámico
    app.listen(port, () => console.log(`Server is running on PORT ${port}`));
    })
    //Si tiene problemas al conectar 
    .catch(err => console.log(err))

module.exports = app;
