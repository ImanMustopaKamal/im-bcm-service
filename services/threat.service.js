const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, createThreat, changeThreat, removeThreat, countThreatByFilter
  } = require("../repositories/threat.repository");
  
  const buildFilter = async (query) => {
    let filter = {
      where : {}
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
    return filter;
  };

  const getAllThreats = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;

    const filter = buildFilter(query);

    const threats = await findAll(filter, pagiante);
  
    return threats;
  };

  const countThreat = async (req, res) => {
    const { query } = req;

    const filter = buildFilter(query);
    const thCount = await countThreatByFilter(filter);

    return thCount;
  };

  const getThreatByID = async (threat_id) => {
    const threat = await findBy('id', threat_id);

    return threat;
  };

  const addNewThreat = async (body) => {
    const data = {
      id : nanoid(8),
      ...body,
      is_active : true
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
    getAllThreats, getThreatByID, addNewThreat, updateThreat, deleteThreat, countThreat
  };
  