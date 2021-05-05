const express = require('express')
const router = express.Router()
const transactions = require('../controllers/transactions.controller');

// Retrieve all employees
router.get('/', transactions.findAll);

// Create a new employee
router.post('/', transactions.create);

// Retrieve a single employee with id
router.get('/:id', transactions.findById);

// Update a employee with id
router.put('/:id', transactions.update);

// Delete a employee with id
router.delete('/:id', transactions.delete);

module.exports = router