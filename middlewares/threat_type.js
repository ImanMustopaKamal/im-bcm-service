const { response, enums, func } = require("../helpers");
const { findBy } = require("../repositories/threat_type.repository");

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

module.exports = {
  createValidator,
};
