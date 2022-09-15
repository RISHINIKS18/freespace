const mongoose = require('mongoose');

const { Schema } = mongoose;

const Stocks = new Schema({
    stock_name: {
        type: String,
    },
    value: {
        type: String,
    },  
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_at: {
        type: Date,
    },

}, {
    toJSON: {
        virtuals: true,
    },
});

const user = mongoose.model('stocks', Stocks, 'stocks');

module.exports = user;
