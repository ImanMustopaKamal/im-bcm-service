const productMiddleware = (req, res, next) => {
  console.log('product middleware');
  next();
}

module.exports = {
  productMiddleware
};