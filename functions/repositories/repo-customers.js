const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.firestore();

getCustomerRepo = async (req, res) => {
    console.log("<= devolviendo desde Repository.");
    let customer = db.collection('customers').doc('diego');
    let getDoc = await customer.get()
        .then(doc => {
            if (!doc.exists) {
                console.log(`No se encontró ningun cliente`);
            } else {
                console.log('Document data en REPO:', doc.data());
                //resultado.push(doc.data());
                //console.log('Resultado: ', resultado);
                res.send(doc.data());
            }
        })
        .catch(error => {
            console.log('Error al obtener el documento', error);
        });    
}



module.exports = {
    getCustomerRepo
}