const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { getCustomerModel } = require('../models/model-customers');

exports.HelloDude = functions
    .https.onRequest((req, res) => {
        res.send(helloModel(req, res));
        res.end();
    })

exports.getCustomer = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("enviando peticións desde API => Model");
        getCustomerModel(req, res);
    })