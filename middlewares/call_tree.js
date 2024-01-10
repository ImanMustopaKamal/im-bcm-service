const { response } = require("../helpers");


const createValidator = (req, res, next) => {
  if(req.file.mimetype !== 'text/csv') {
    return response.badRequest(res, null, "Code is required", 404);
  }
  next()
};

module.exports = {
  createValidator,
};
