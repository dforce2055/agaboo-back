const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { 
    getProductsModel, 
    createProductsModel,
    getProductByIdModel,
    deletProductByIdModel
    } = require('../models/model-products');

exports.getProducts = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("enviando peticións desde API => Model");
        getProductsModel(req, res);
    })

exports.createProduct = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("enviando peticións desde API => Model");
        createProductsModel(req, res);
    })

exports.getProductById = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("enviando peticións desde API => Model");
        getProductByIdModel(req, res);
    })

exports.deleteProductById = functions
    //.region('us-east1') //región southamerica-east1 (São Paulo)
    .https.onRequest((req, res) => {
        console.log("enviando peticións desde API => Model");
        deleteProductByIdModel(req, res);
    })