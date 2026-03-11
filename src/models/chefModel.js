const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Chef name is required'],
        trim: true 
    },
    specialty: { 
        type: String, 
        default: 'General' 
    },
    experience: { 
        type: Number, 
        min: [0, 'Experience cannot be negative'], 
        max: [50, 'That is a lot of experience!'] 
    }
}, { timestamps: true });

module.exports = mongoose.model('Chef', chefSchema);