const { response } = require("../helpers");
const {
  getAllThreats, getThreatByID, addNewThreatTypes
  } = require("../services/threat_type.service");
  
const get = async (req, res) => {
  threats = await getAllThreats(req, res);

  response.success(res, threats, "Threat type retrieved", 200);
};

const getByID = async (req, res) => {
  const threat = await getThreatByID(req.params.id);

  response.success(res, threat, "Threat type retrieved", 200);
};

const create = async (req, res) => {
  const { body } = req;
  const threat = await addNewThreatTypes(body);

  response.success(res, threat, "Threat type created", 201);
};

module.exports = {
  get, getByID, create
}