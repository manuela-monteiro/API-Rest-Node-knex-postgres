const express = require('express');
const knex = require('./database');

const AppRoutes = express.Router();

const userController = require('./controllers/userController');

AppRoutes.get('/users', userController.index);

module.exports = AppRoutes;