const productMiddleware = (req, res, next) => {
  console.log('product middleware');
  return next();
}

module.exports = {
  productMiddleware
};