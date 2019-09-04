// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloDude = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("Hello Dude from console");
        res.send("Hello Dude from Firebase!");
        res.end();
    });

exports.getAllUsers = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        admin.firestore().collection('users').get()
            // eslint-disable-next-line promise/always-return
            .then(snapshot => {
                let users = [];
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    users.push(doc.id, '=>', doc.data());
                });
                res.send(users);
                res.end();
            })
            .catch(error => {
                console.log('Error getting documents', error);
            });

    })