const { response, func } = require("../helpers");
const { findBy, findAll } = require("../repositories/threat.repository");

const createValidator = async (req, res, next) => {
  const { name, type_id } = req.body;
  const tenant_id = res.tenant_id;

  if (func.isNull(name)) {
    return response.badRequest(res, null, "Name is required", 404);
  }

  if (func.isNull(type_id)) {
    return response.badRequest(res, null, "Type ID is required", 404);
  }
  const filter = {
    where : {
      "tenant_id" : tenant_id,
      "type_id" : type_id,
      "name" : name
    }
  }
  const threat = await findAll(filter, {});
  if (Object.keys(threat).length > 0) {
    return response.badRequest(res, null, "Threat already exists", 404);
  }

  next();
};

const updateValidator = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  const tenant_id = res.tenant_id;
  const threat = findBy(tenant_id, "id", id);
  if (!threat)
  {
    return response.badRequest(res, null, "Threat type not found", 404);
  }
  if (func.isNull(body))
  {
    return response.badRequest(res, null, "Body request is empty", 404);
  }
  next();
};

const deleteValidator = async (req, res, next) => {
  const { id } = req.params;
  const tenant_id = res.tenant_id;
  const threat_types = await findBy(tenant_id, "id", id);
  if (!threat_types) {
    return response.badRequest(res, null, "Threat types not found", 404);
  }

  next();
};

module.exports = {
  createValidator, deleteValidator, updateValidator
};
