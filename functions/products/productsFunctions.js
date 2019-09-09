const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.firestore();

exports.getProducts = functions.https.onRequest((req, res) => { 

  db.collection('/products') //Coleccion a buscar
  .limit(10) //Limite de JSON a traer de db
  .get()
  // eslint-disable-next-line promise/always-return
  .then( querySnapshot => {
    let productos = [];
    querySnapshot.forEach(doc => {
      productos.push(doc.id,'=>', doc.data());
    });
    
    res.send(productos);
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
      name: data.name, 
      id: data.id
      });

  res.redirect(303, snapshot.ref.toString());
  res.end();
});

exports.productById = functions.https.onRequest((req,res) => {
  var id = req.query.id;

  db.collection('/products')
  .limit(10)
  .get()
  // eslint-disable-next-line promise/always-return
  .then( querySnapshot => {
    let productos = [];
    querySnapshot.forEach(doc => {
      if (doc.data().id === id) {
        usuarios.push(doc.id,doc.data());
      }
    });
    
    res.send(productos);
    res.end();
  }).catch(error => {
    console.log('ERROOOORR', error);
});
});

exports.deleteProduct = functions.https.onRequest((req,res) => {

  let id = req.query.id;
  
  // eslint-disable-next-line promise/catch-or-return
  db.collection('/products')
  .get()
  // eslint-disable-next-line promise/always-return
  .then(doc => {
    let flag = [{      
        edo:false      
    }];
    doc.forEach(doc=>{
      if (doc.data().id === id) {
        flag.edo = true; //confirmo que se elimino
        db.collection('/products').doc(doc.id).delete();        
      }
    });

    res.send(flag.edo); //Si es verdadero fue eliminado.
  })
  .catch(err =>{
    res.send('err=',err);
  });

  res.redirect(303, snapshot.ref.toString());
  res.end();
});