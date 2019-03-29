const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
}

async function getAll() {
}

async function getById(id) {
}

async function create(userParam) {
}

async function update(id, userParam) {
}

async function _delete(id) {
}