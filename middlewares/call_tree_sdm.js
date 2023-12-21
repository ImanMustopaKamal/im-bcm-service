const callTreeMiddleware = (req, res, next) => {
    console.log('calltree middleware');
    next();
  }
  
  module.exports = {
    callTreeMiddleware
  };