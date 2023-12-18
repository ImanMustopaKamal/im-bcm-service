const threatMiddleware = (req, res, next) => {
    console.log(`threat middleware req body ${req.body} `);
    next();
  }
  
  module.exports = {
    threatMiddleware
  };