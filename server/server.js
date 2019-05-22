require('./config/config')

const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//configuracion inicial de rutas
app.use(require('./controller/index'));

mongoose.connect(process.env.urlDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos online')
    });

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto " + process.env.PORT)
});