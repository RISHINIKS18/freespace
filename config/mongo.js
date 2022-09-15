const mongoose = require('mongoose');
require('dotenv').config();


module.exports = {
    bootstrap: () => {
        const connectionString = `${process.env.DATABASE_URL}`;
        console.log(`Mongo connectionString: ${connectionString}`);
        mongoose.connect(connectionString)
            .then((db) => {
                console.log(`Connected to MongoDB! ENV: ${[process.env.NODE_ENV]}`);
            })
            .catch((err) => {
                if (err) {
                    console.log(`Unable to connect MongoDB ${err}`);
                }
            }); 
    },
    config: null,
};
