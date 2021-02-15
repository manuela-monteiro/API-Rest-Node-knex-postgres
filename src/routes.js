const express = require('express');
const knex = require('./database');

const AppRoutes = express.Router();

// Calling controllers
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');

// User routes
AppRoutes.get('/users', userController.index);
AppRoutes.post('/users/create', userController.createUser);
AppRoutes.put('/users/update/:id', userController.updateUser);
AppRoutes.delete('/users/delete/:id', userController.deleteUser);

// Projects routes
AppRoutes.get('/projects', projectController.index);
AppRoutes.post('/projects/create', projectController.createProject);

module.exports = AppRoutes;