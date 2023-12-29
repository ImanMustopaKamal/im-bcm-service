const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    findAll, findBy, storeThreatTypes, removeThreatTypes, changeThreatTypes, countAll
  } = require("../repositories/threat_type.repository");

  const buildFilter = async (query) => {

    let filter = {
      where : {}
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
    return filter;

  };
  
  const countAllThreat = async (req,res) => {
    const { query } = req;
    const filter = await buildFilter(query);
    const thCount = await countAll(filter);

    return thCount;

  };

  const getAllThreats = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;

    const filter = await buildFilter(query);    
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
    getAllThreats, getThreatByID, addNewThreatTypes, deleteThreatTypes, updateThreatTypes, countAllThreat
  };
  