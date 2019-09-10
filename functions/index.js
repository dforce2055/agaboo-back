const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firestore);

//LEER--> Para importar solamente ' user ' se escribe ' firebase deploy --only functions:user '
//LEER--> Para importar una functions en especifico dentro de ' user ' se escribe ' firebase deploy --only functions:product.FUNCION_A_IMPORTAR '

exports.product = require('./products/productsFunctions'); //Importo todas las cloud functions de producto
exports.user = require('./users/userFunctions'); //Importo todas las cloud functions de usuario
exports.apiCustomers = require('./api-services/api-customers'); //Importo todas las cloud functions de customers
exports.apiProducts = require('./api-services/api-products'); //Importo todas las cloud functions de customers