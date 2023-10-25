const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    symbol: {type: String},
    price: {type: Number},
    quantity: {type: Number},
});

// Create a model for the transactions
const Transaction = mongoose.model('transaction', transactionSchema);
module.exports = Transaction;