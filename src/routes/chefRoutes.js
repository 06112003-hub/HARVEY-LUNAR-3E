const express = require('express');
const router = express.Router();    
const Chef = require('../models/chefModel');

// Create a new chef
// Note: Path is '/' because it's already prefixed with '/chefs' in apiRoutes.js
router.post('/', async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Example: Get all chefs (The actual GET route)
router.get('/', async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;