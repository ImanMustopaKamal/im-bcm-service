const { response } = require("../helpers");
const {
  getAllThreats, getThreatByID, addNewThreat
  } = require("../services/threat.service");
  
  const get = async (req, res) => {
    threats = await getAllThreats(req, res);

    response.success(res, threats, "Threat retrieved", 200);
  };

  const getByID = async (req, res) => {
    const threat = await getThreatByID(req.params.id);

    response.success(res, threat, "Threat retrieved", 200);
  };

  const addThreat = async (req, res) => {
    let threat = {
      id : uuidv4(),
      type_id : req.body.type_id,
      sort_order : req.body.sort_order,
      name : req.body.name,
      is_active : true,
    };
    const aThreat = await addNewThreat(threat);

    res.send(aThreat);
  };
  module.exports = {
    get, getByID, addThreat
  }