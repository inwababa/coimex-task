const Transaction = require('../models/transaction');
exports.addTrades = async (req, res) => {
  const {
    symbol,
    price,
    quantity
  } = req.body;
  try {
    const data = await Transaction.create({
      symbol: symbol,
      price: price,
      quantity: quantity
    });
    if (data) {
      return res.status(200).json({
        success: true,
        message: ` Trades Added`,
        data
      });
      //res.json(data[0]); // Return the aggregation data
    } else {
      res.status(400).json({
        success: false,
        message: `Request failed`
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error adding Trades`
    });
  }
};
exports.getTrades = async (req, res) => {
  const symbol = req.params.symbol;
  try {
    // MongoDB aggregation query
    const data = await Transaction.aggregate([{
      $match: {
        symbol: symbol
      }
    }, {
      $group: {
        _id: symbol,
        totalNumberofTransactions: {
          $sum: 1
        },
        totalTransactionVolume: {
          $sum: {
            $multiply: ["$price", "$quantity"]
          }
        },
        averageTransactionPrice: {
          $avg: "$price"
        }
      }
    }]);
    if (data.length > 0) {
      res.status(200).json({
        success: true,
        message: `Transactions statistics`,
        data
      });
      //res.json(data[0]); 
    } else {
      res.status(404).json({
        success: false,
        message: `Symbol not found`
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error Fectching Data`
    });
  }
};