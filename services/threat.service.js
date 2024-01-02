const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, createThreat, changeThreat, removeThreat
  } = require("../repositories/threat.repository");
  
  const getAllThreats = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    const tenant_id = req.tenant_id;
    let filter = {
      where : {
        "tenant_id" : tenant_id
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

    const results = await findAll(filter, pagiante);
  
    return results;
  };

  const getThreatByID = async (tenant_id, threat_id) => {
    const threat = await findBy(tenant_id, 'id', threat_id);

    return threat;
  };

  const addNewThreat = async (tenant_id, body) => {
    const data = {
      "id" : nanoid(8),
      "tenant_id" : tenant_id,
      ...body,
      "is_active" : true
    };
    const threat = await createThreat(data);
    
    return threat;
  };

  const updateThreat = async (id, body) => {
    const data = {
      ...body,
      updated_at : new Date()
    };
    const threat = await changeThreat(id, data);

    return threat;
  };

  const deleteThreat = async (id) => {
    const threat = await removeThreat(id);

    return threat;
  };

  module.exports = {
    getAllThreats, getThreatByID, addNewThreat, updateThreat, deleteThreat
  };
  