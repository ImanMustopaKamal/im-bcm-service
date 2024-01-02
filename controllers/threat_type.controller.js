const { response } = require("../helpers");
const {
  getAllThreats, getThreatByID, addNewThreatTypes, updateThreatTypes, deleteThreatTypes
  } = require("../services/threat_type.service");
  
const get = async (req, res) => {
  const { dataCount, data } = await getAllThreats(req, res);

  response.successWithDataCount(res, dataCount, data, "Threat type retrieved with count", 200);
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

const updateThType = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const threat = await updateThreatTypes(id, body);
  response.success(res, threat, "Threat type updated", 200);
};

const deleteThType = async (req, res) => {
  const { id } = req.params;

  const threat = await deleteThreatTypes(id);

  response.success(res, threat, "Threat type deleted", 200);
};

module.exports = {
  get, getByID, create, updateThType, deleteThType
}