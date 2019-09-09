const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.firestore();

exports.getProducts = functions.https.onRequest((req, res) => { 

  db.collection('/products') //Coleccion a buscar
  .limit(10) //Limite de JSON a traer de db
  .get()
  // eslint-disable-next-line promise/always-return
  .then( querySnapshot => {
    let usuarios = [];
    querySnapshot.forEach(doc => {
      usuarios.push(doc.id,'=>', doc.data());
    });
    
    res.send(usuarios);
    res.end();
  }).catch(error => {
    console.log('ERROOOORR', error);
});
});

exports.createProduct = functions.https.onRequest((req, res) => {

  const data = {
    name: req.query.name,
    id: req.query.id
  };

  const snapshot = db
    .collection('/products')
    .add({
      name: dataToInsert.name, 
      id: dataToInsert.id
      });

  res.redirect(303, snapshot.ref.toString());
  res.end();
});
