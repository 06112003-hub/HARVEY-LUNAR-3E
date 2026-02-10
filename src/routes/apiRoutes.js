const express = require('express'); 
const router = express.Router();

// import the controller

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

//1. 
router.get('/dishes', getAllDishes);

//2.
router.post('/dishes', createDish);

//3.
router.get('/dishes/:id', getDishById);

//4.
router.put('/dishes/:id', updateDish);

//5.
router.delete('/dishes/:id', deleteDish);

module.exports = router;