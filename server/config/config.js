// =================
// Puerto
// =================
process.env.PORT = process.env.PORT || 3000;


// =================
// Entorno
// =================

process.env.Node_EMV = process.env.Node_EMV || 'dev';

// =================
// Base de Datos
// =================
let urlDB;

//if (process.env.Node_EMV === 'dev') {
//    urlDB = 'mongodb://localhost:27017/cafe'
//} else {
urlDB = process.env.MONGO_URI.replace('__adm', '!')
    //}

process.env.urlDB = urlDB;