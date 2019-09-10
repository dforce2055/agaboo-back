const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { 
    getProductsRepo,
    createProductsRepo,
    getProductByIdRepo,
    deleteProductByIdRepo
     } = require('../repositories/repo-products');


getProductsModel = async (req, res) => {
    console.log("re-enviando petición desde Model => a Repository");
    getProductsRepo(req, res);
}

createProductsModel = (req, res) => {
    console.log("re-enviando petición desde Model => a Repository");
    createProductsRepo(req, res);
}

getProductByIdModel = (req, res) => {
    console.log("re-enviando petición desde Model => a Repository");
    getProductByIdRepo(req, res);
}

deleteProductByIdModel = (req, res, resultado) => {
    console.log("re-enviando petición desde Model => a Repository");
    // 1- Buscar por id (reutilizar función)
    // 2- eliminar el producto buscado por id
   
}

module.exports = {
    getProductsModel,
    createProductsModel,
    getProductByIdModel,
    deleteProductByIdModel
}