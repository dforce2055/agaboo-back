const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.firestore();
let collection = '/products';

getProductsRepo = async (req, res) => {
    console.log("<= devolviendo desde Repository.");
    //let collection = '/products';
    db.collection(collection) //Coleccion a buscar
        .limit(10) //Limite de JSON a traer de db
        .get()
        // eslint-disable-next-line promise/always-return
        .then(products => {
            if (!products) {
                console.log(`No se encontró la colección ${ collection }`);
                res.end();
            } else {
                let result = products.docs.map(doc => ({ __id: doc.id, ...doc.data() }));
                res.send(result);
                res.end();
            } 
        })
        .catch(error => {
            console.log(`Error al obtener la colección ${collection}`, error);
        });
}

createProductsRepo =  (req, res) => {
    console.log("<= devolviendo desde Repository.");
    //let collection = '/products';
    // Falta definir data => req.query.data;
    const data = {
        name: req.query.name,
        id: req.query.id
    };

    const snapshot = db
        .collection(collection)
        .add({
            name: data.name,
            id: data.id
        });

    res.redirect(303, snapshot.ref.toString());
    res.end();
}

getProductByIdRepo = async (req, res) => {
    console.log("<= devolviendo desde Repository.");
    //let id = req.id;
    let id = 1;// test

    let products = db.collection(collection)
        .where('id', '==', id ).get()
        .then(product => {
            if (!product) {
                console.log(`No se encontró el producto id: ${ id }`);
                res.end();
            } else {
                // guardo en result el resultado de la query separando por documento
                // aunque debeía devolver un solo documento
                let result = product.docs.map(doc => ({ __id: doc.id, ...doc.data() }));
                //console.log('Product data en REPO:', result);
                res.send(result);
                res.end();
            }
        })
        .catch(error => {
            console.log('Error al obtener el producto', error);
        });
}

deleteProductByIdRepo = async (req, res) => {
    console.log("<= devolviendo desde Repository.");
    // 1- Buscar por id (reutilizar función)
    // 2- eliminar el producto buscado por id
    res.send("borrando");
    res.end();
}



module.exports = {
    getProductsRepo,
    createProductsRepo,
    getProductByIdRepo,
    deleteProductByIdRepo
}