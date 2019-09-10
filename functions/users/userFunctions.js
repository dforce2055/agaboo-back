const functions = require('firebase-functions');
const admin = require('firebase-admin');

let db = admin.firestore();

exports.getUsers = functions.https.onRequest((req, res) => { 

  db.collection('usuarios') //Coleccion a buscar
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

exports.createUser = functions.https.onRequest((req, res) => {

  const dataToInsert = {
      name: req.query.name,
    dni: req.query.dni
  };

  const snapshot = db
    .collection('/usuarios')
    .add({
      name: dataToInsert.name, 
      dni: dataToInsert.dni
      });

  res.redirect(303, snapshot.ref.toString());
  res.end();
});

exports.userById = functions.https.onRequest((req,res) => {
  var dni = req.query.dni;

  db.collection('usuarios')
  .limit(10)
  .get()
  // eslint-disable-next-line promise/always-return
  .then( querySnapshot => {
    let usuarios = [];
    querySnapshot.forEach(doc => {
      if (doc.data().dni === dni) {
        usuarios.push(doc.id,doc.data());
      }
    });
    
    res.send(usuarios);
    res.end();
  }).catch(error => {
    console.log('ERROOOORR', error);
});
});

exports.deleteUser = functions.https.onRequest((req,res) => {

  let dni = req.query.dni;
  
  // eslint-disable-next-line promise/catch-or-return
  db.collection('/usuarios')
  .get()
  // eslint-disable-next-line promise/always-return
  .then(doc => {
    let flag = [{      
        edo:false      
    }];
    doc.forEach(doc=>{
      if (doc.data().dni === dni) {
        flag.edo = true; //confirmo que se elimino
        db.collection('/usuarios').doc(doc.id).delete();        
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

exports.getAllCustomers = functions
  //.region('us-east1') //región southamerica-east1 (São Paulo)
  .https.onRequest((req, res) => {
    admin.firestore().collection('customers').get()
      // eslint-disable-next-line promise/always-return
      .then(snapshot => {
        let customers = [];
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          customers.push(doc.id, '=>', doc.data());
        });
        res.send(customers);
        res.end();
      })
      .catch(error => {
        console.log('Error getting documents', error);
      });

  })