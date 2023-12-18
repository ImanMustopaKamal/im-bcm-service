const {
    findAll, findThreats, findByID, findByType, createThreat
  } = require("../repositories/threat.repository");
  
  const getAllThreats = async () => {
    const threats = await findAll();
  
    return threats;
  };

  const searchThreats = async(type_id, name) => {
    const threats = await findThreats(type_id, name);

    return threats;
  };
  
  const getThreatByID = async (threat_id) => {
    const threat = await findByID(threat_id);

    return threat;
  };

  const getThreatByType = async (type_id) => {
    const threats = await findByType(type_id);

    return threats;
  };

  const addNewThreat = async (threat) => {
    const aThreat = await createThreat(threat);
    
    return aThreat;
  };

  module.exports = {
    searchThreats, getAllThreats, getThreatByID, getThreatByType, addNewThreat
  };
  