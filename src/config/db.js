const dns = require('dns');
const mongoose = require('mongoose');

// Use reliable public DNS servers for c-ares (Node's DNS resolver)
// This helps when the system resolver blocks SRV lookups used by mongodb+srv
dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }   
};
module.exports = connectDB;