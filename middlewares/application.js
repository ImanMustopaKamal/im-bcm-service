const appMiddleware = (req, res, next) => {
    console.log('product middleware');
    next();
  }
  
  module.exports = {
    appMiddleware
  };