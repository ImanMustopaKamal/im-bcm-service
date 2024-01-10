const createValidator = (req, res, next) => {
  console.log('createValidator', req.file.path)
  
  next()
}

module.exports = {
  createValidator
}