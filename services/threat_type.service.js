const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, storeThreatTypes
  } = require("../repositories/threat_type.repository");
  
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

    if (!func.isNull(query.name)) {
      const nameFilter = {
        contains : query.name
      };
      filter.where['name'] = nameFilter;
    }

    const threats = await findAll(filter, pagiante);
  
    return threats;
  };

  const getThreatByID = async (id) => {
    const threat = await findBy('id', id);

    return threat;
  };

  const addNewThreatTypes = async (body) => {
    const data = {
      id : nanoid(8),
      ...body,
      is_active : true
    };
    const aThreat = await storeThreatTypes(data);
    
    return aThreat;
  };

  module.exports = {
    getAllThreats, getThreatByID, addNewThreatTypes
  };
  