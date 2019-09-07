// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

exports.getAllCustomers = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        admin.firestore().collection('customers').get()
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