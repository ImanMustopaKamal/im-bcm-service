const { response, func } = require("../helpers");

const importValidator = (req, res, next) => {
  if (req.file.mimetype !== "text/csv") {
    return response.badRequest(res, null, "csv only", 404);
  }
  next();
};

const createValidator = (req, res, next) => {
  const { body } = req;
  
  if (func.isNull(body.npp)) {
    return response.badRequest(res, null, "npp is required", 404);
  }
  if (func.isNull(body.name)) {
    return response.badRequest(res, null, "name is required", 404);
  }
  if (func.isNull(body.position)) {
    return response.badRequest(res, null, "position is required", 404);
  }
  if (func.isNull(body.employment_status)) {
    return response.badRequest(res, null, "employment status is required", 404);
  }

  next();
};

const updateValidator = (req, res, next) => {
  next();
};

module.exports = {
  createValidator,
  importValidator,
  updateValidator,
};
