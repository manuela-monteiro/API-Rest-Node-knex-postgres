const express = require('express');
const knex = require('./database');

const AppRoutes = express.Router();

const userController = require('./controllers/userController');

AppRoutes.get('/users', userController.index);
AppRoutes.post('/users/create', userController.createUser);
AppRoutes.put('/users/update/:id', userController.updateUser);
AppRoutes.delete('/users/delete/:id', userController.deleteUser);

module.exports = AppRoutes;