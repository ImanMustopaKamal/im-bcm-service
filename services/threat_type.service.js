const {
    findAll, findByID, createThreat, updateThreat, deleteThreat
  } = require("../repositories/threat_type.repository");
  
  const getAllThreats = async (filter) => {
    const threats = await findAll(filter);
  
    return threats;
  };

  const getThreatByID = async (threat_id) => {
    const threat = await findByID(threat_id);

    return threat;
  };

  const addNewThreat = async (threat) => {
    const aThreat = await createThreat(threat);
    
    return aThreat;
  };

  const update = async (threat_id, data) => {
    const aThreat = await updateThreat(threat_id, data);

    return aThreat;
  };

  const deleteTh = async (threat_id) => {
    const dThreat = await deleteThreat(threat_id);

    return dThreat;
  };

  module.exports = {
    getAllThreats, getThreatByID, addNewThreat, update, deleteTh
  };
  