const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'notebook';
mongoose.set("strictQuery", false);
const connectdb = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);
        console.log('MongoDB Connected!!');
    } catch (err) {
        console.log("Failsed to connect", err);
    }
}

module.exports = connectdb;