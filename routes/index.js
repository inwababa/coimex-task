const express = require("express");
const router = express.Router();
const {validateTrades, validateGetTrades} = require('../middleware/validateTrades');

const tradeController = require("../controllers/trades")


//Define Routes
router.post("/addtrades", validateTrades, tradeController.addTrades)
router.get("/symbol-statistics/:symbol", validateGetTrades, tradeController.getTrades)


module.exports = router;