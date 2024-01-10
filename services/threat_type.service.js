const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, storeThreatTypes, removeThreatTypes, changeThreatTypes, countAll
  } = require("../repositories/threat_type.repository");

  const getAllThreats = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    const tenant_id = res.tenant_id;

    let filter = {
      where : {
        "tenant_id" : tenant_id
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

    const results = await findAll(filter, pagiante);
  
    return results;
  };

  const getThreatByID = async (tenant_id, id) => {
    const threat = await findBy(tenant_id, 'id', id);

    return threat;
  };

  const addNewThreatTypes = async (tenant_id, body) => {
    const data = {
      "id" : nanoid(8),
      "tenant_id" : tenant_id,
      ...body,
      "is_active" : true
    };
    const threat = await storeThreatTypes(data);
    
    return threat;
  };

  const updateThreatTypes = async (id, body) => {
    const data = {
      ...body,
      updated_at : new Date()
    };
    const threat = await changeThreatTypes(id, data);

    return threat;
  };

  const deleteThreatTypes = async (id) => {
    const threat = await removeThreatTypes(id);

    return threat;
  };

  module.exports = {
    getAllThreats, getThreatByID, addNewThreatTypes, deleteThreatTypes, updateThreatTypes
  };
  