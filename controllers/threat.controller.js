const { response } = require("../helpers");
const {
  getAllThreats, getThreatByID, addNewThreat, updateThreat, deleteThreat, countThreat
  } = require("../services/threat.service");
  
  const get = async (req, res) => {
    const thCount = await countThreat(req, res);
    const threats = await getAllThreats(req, res);

    response.successWithDataCount(res, thCount, threats, "Threat retrieved", 200);
  };

  const getByID = async (req, res) => {
    const threat = await getThreatByID(req.params.id);

    response.success(res, threat, "Threat retrieved", 200);
  };

  const addThreat = async (req, res) => {
    const { body } = req;
    const threat = await addNewThreat(body);

    response.success(res, threat, "Threat created", 201);
  };

  const updateTh = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const threat = await updateThreat(id, body);

    response.success(res, threat, "Threat updated", 200);
  };

  const deleteTh = async (req, res) => {
    const { id } = req.params;
    const threat = await deleteThreat(id);

    response.success(res, threat, "Threat deleted", 200);
  };


  module.exports = {
    get, getByID, addThreat, updateTh, deleteTh
  }