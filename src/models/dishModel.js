const mongoose = require('mongoose');

// 1. Define the Review Schema FIRST
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

// 2. Now you can use it inside the Dish Schema
const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  // Use the variable we defined above
  reviews: [reviewSchema], 
  numReviews: { type: Number, default: 0 },
}, { timestamps: true });

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;