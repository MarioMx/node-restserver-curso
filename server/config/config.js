// =================
// Puerto
// =================
process.env.PORT = process.env.PORT || 3000;


// =================
// Entorno
// =================

process.env.Node_EMV = process.env.Node_EMV || 'dev';

// =================
// Vencimiento del Token
// =================
// 60 segundos
// 60 minutos
// 24 horas 
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =================
// SEED de autenticación
// =================

process.env.SEED = process.env.SEED || 'este-ese-el-seed-desarrollo';

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