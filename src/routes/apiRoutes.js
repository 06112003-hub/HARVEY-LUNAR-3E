const express = require('express'); 
const router = express.Router();
const authRoutes = require('./authRoutes');



// import the controller

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

const chefRoutes = require('./chefRoutes');

router.use("/chefs", chefRoutes);

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

router.use('/auth', authRoutes);


module.exports = router;