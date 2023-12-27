const { response, func } = require("../helpers");
const { findBy } = require("../repositories/threat_type.repository");
const { countThreatByFilter } = require("../repositories/threat.repository");

const createValidator = async (req, res, next) => {
  const { name } = req.body;

  if (func.isNull(name)) {
    return response.badRequest(res, null, "Name is required", 404);
  } else {
    const threat_type = await findBy("name", name);
    if (threat_type) {
      return response.badRequest(res, null, "Name is already exist", 404);
    }
  }

  next();
};

const updateValidator = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  const threat = findBy("id", id);
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
  const threat_types = await findBy("id", id);
  if (!threat_types) {
    return response.badRequest(res, null, "Threat types not found", 404);
  }
  const thCount = await countThreatByFilter({
      "type_id" : id
  });

  if (thCount > 0) {
    return response.badRequest(res, null, "Cannot delete threat types", 404);
  }

  next();
};

module.exports = {
  createValidator, deleteValidator, updateValidator
};
