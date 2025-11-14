const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// CRUD
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
