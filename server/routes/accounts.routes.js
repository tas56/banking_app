const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accounts.controllers');

// Retrieve all employees
router.get('/', accountController.findAll);

// Create a new employee
router.post('/', accountController.create);

// Retrieve a single employee with id
router.get('/:id', accountController.findById);

// Update a employee with id
router.put('/:id', accountController.update);

// Delete a employee with id
router.delete('/:id', accountController.delete);

module.exports = router