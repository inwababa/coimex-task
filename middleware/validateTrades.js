const validateTrades = (req, res, next) => {
    const { symbol, price, quantity } = req.body;
  
    // Check data types
    if (
      typeof symbol !== 'string' ||
      typeof price !== 'number' ||
      typeof quantity !== 'number'
    ) {
      return res
        .status(400)
        .json({ status: 400, message: 'Invalid data types in the request body' });
    }
  
    // If data types are valid, proceed to the next middleware or route handler
    next();
  };

  const validateGetTrades = (req, res, next) => {
    const { symbol } = req.params;
  
    // Check data types
    if (
      typeof symbol !== 'string'
    ) {
      return res
        .status(400)
        .json({ status: 400, message: 'Invalid data types in the query parameters' });
    }
  
    // If data types are valid, proceed to the next middleware or route handler
    next();
  };
  
  
  module.exports = {validateTrades, validateGetTrades};
  