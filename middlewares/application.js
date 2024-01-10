const { response, enums, func } = require("../helpers");
const { findBy } = require("../repositories/application.repository");

const createValidator = async (req, res, next) => {
  const { code, name, severity } = req.body;
  const tenant_id = res.tenant_id;

  if (func.isNull(code)) {
    return response.badRequest(res, null, "Code is required", 404);
  } else {
    const application = await findBy(tenant_id, "code", code);
    if (application) {
      return response.badRequest(res, null, "Code already exist", 404);
    }
  }

  if(func.isNull(name)) {
    return response.badRequest(res, null, "Name is required", 404);
  }

  if(func.isNull(severity)) {
    return response.badRequest(res, null, "Severity is required", 404);
  }else{
    if(!enums.severity.includes(severity)){
      return response.badRequest(res, null, "Severity is not valid", 404);
    }
  }

  next();
};

const updateValidator = async (req, res, next) => {
  const { id } =  req.params;
  const { body } = req;
  if (func.isNull(id)) {
    return response.badRequest(res, null, "id is required", 404);
  } else {
    const apps = await findBy("id", id);
    if (!(apps)) {
      return response.badRequest(res, null, "Data not found", 404);
    }
  }
  if (!(body)) {
    return response.badRequest(res, null, "request is not contain the body", 404);
  }
  next();
};

const deleteValidator = async (req, res, next) => {
  const { id } =  req.params;
  if (func.isNull(id)) {
    return response.badRequest(res, null, "id is required", 404);
  } else {
    const apps = await findBy("id", id);
    if (!(apps)) {
      return response.badRequest(res, null, "Data not found", 404);
    }
  }
  next();
};

module.exports = {
  createValidator,
  updateValidator,
  deleteValidator
};
