const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, createThreat
  } = require("../repositories/threat.repository");
  
  const getAllThreats = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    const filter = {
      where : {

      }
    };
    
    if (!func.isNull(query.is_active)) {
      filter.where['is_active'] = query.is_active === 'true';   
    }

    if (!func.isNull(query.type_id)) {
      filter.where['type_id'] = query.type_id;
    }

    if (!func.isNull(query.name)) {
      const nameFilter = {
        contains : query.name
      };
      filter.where['name'] = nameFilter;
    }

    const threats = await findAll(filter, pagiante);
  
    return threats;
  };

  const getThreatByID = async (threat_id) => {
    const threat = await findBy('id', threat_id);

    return threat;
  };

  const addNewThreat = async (threat) => {
    const aThreat = await createThreat(threat);
    
    return aThreat;
  };

  module.exports = {
    getAllThreats, getThreatByID, addNewThreat
  };
  