const functions = require('firebase-functions');
const admin = require('firebase-admin');
const users = require('./repositories/users'); 
const customers = require('./repositories/customers'); 

admin.initializeApp(functions.config().firestore);
let db = admin.firestore();

// exporto las funciones 
exports.helloDude = users.helloDude;
exports.getAllUSers = users.getAllUsers;
exports.getAllCustomers = customers.getAllCustomers;

//----ABM----
exports.getUsers = functions.https.onRequest((req, res) => { 

  db.collection('usuarios') //Coleccion a buscar
      .limit(10) //Limite de JSON a traer de db
      .get()
      // eslint-disable-next-line promise/always-return
      .then( querySnapshot => { //Si todo fue bien, ejecutara las siguientes lineas de codigo
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

  const data = { //Recibo los parametros que vienen del endpoint
      name: req.query.name,
    dni: req.query.dni
  };

  const snapshot = db
    .collection('/usuarios') //agregar coleccion a utilizar o creara una por defecto
    .add({
      name: data.name, 
      dni: data.dni
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
        res.send('Error= ', error);
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
        flag.edo = true; //confirmo que se elimino <---ARREGLAR
        db.collection('/usuarios').doc(doc.id).delete();        
      }
    });

    res.send(flag.edo); //Si es verdadero significa que fue eliminado. <---ARREGLAR!!
  })
  .catch(err =>{
    res.send('err=',err);
  });

  res.redirect(303, snapshot.ref.toString());
  res.end();
});