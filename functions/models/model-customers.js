const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { getCustomerRepo } = require('../repositories/repo-customers');


getCustomerModel = async (req, res) => {
    console.log("re-enviando petición desde Model => a Repository");
    getCustomerRepo(req, res);

}

module.exports = {
    getCustomerModel
}