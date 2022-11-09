const mongoose = require('mongoose');

async function DatabaseConnection() {
    return await mongoose.connect('mongodb://localhost:27017/test').then(
        console.log(`server connected using mongoose`)
    );
}

module.exports = DatabaseConnection;