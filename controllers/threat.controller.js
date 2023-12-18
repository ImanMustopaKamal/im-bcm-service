const {
  searchThreats, getAllThreats, getThreatByID, getThreatByType, addNewThreat
  } = require("../services/threat.service");
  
  const get = async (req, res) => {
    let threats;
    if (req.params.type_id != null && req.params.type_id != '') {
      if(req.params.name != null && req.params.name != ''){
        threats = await searchThreats(req.params.type_id, req.params.name);
      }else {
        threats = await getThreatByType(req.params.type_id);
      }
    }else {
      threats = await getAllThreats();
    }
    res.send(threats);
  };

  const getByID = async (req, res) => {
    const threat = await getThreatByID(req.params.id);

    res.send(threat);
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