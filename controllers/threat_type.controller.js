const { v4: uuidv4 } = require('uuid');

const {
  searchThreats, getAllThreats, getThreatByID, addNewThreat, update, deleteTh
  } = require("../services/threat_type.service");
  
  const get = async (req, res) => {
    try {
      let threats;
      let jsonFilter = { 
        where : {

        },
        orderBy : { 
          name : 'asc'} 
      };
      if (req.query.is_active != null){
        jsonFilter.where['is_active'] = req.query.is_active === 'true';
      }
      if (req.query.name != null){
        let nameFilter = {
          contains : req.query.name
        };
        jsonFilter.where['name'] = nameFilter;
      }
        
      threats = await getAllThreats(jsonFilter);
      res.send(threats);
    } catch (error) {
      res.status(500).json({
        message : 'Internal Server Error'
      });
    }    
  };

  const getByID = async (req, res) => {
    try {
      const threat = await getThreatByID(req.params.id);
      
      res.send(threat);
    } catch (error) {
      res.status(500).json({
        message : 'Internal Server Error'
      });
    }    
  };

  const addThreat = async (req, res) => {
    try {
      let threat = {
        id : uuidv4(),
        type_id : req.body.type_id,
        name : req.body.name,
        is_active : true,
      };
      const aThreat = await addNewThreat(threat);
  
      res.status(201).json(aThreat); 
    } catch (error) {
      res.status(500).json({
        message : 'Internal Server Error'
      });
    }
  };

const updateThreat = async (req, res) =>{
  try {
    let threat_id = req.params.id;

    //check exists
    const fThreat = await getThreatByID(threat_id);

    if (fThreat != null) {
      let data = {
        name : req.body.name,
        is_active : req.body.is_active
      };
      const threat_type = await update(threat_id, data);
      res.send(threat_type);
    }else {
      res.send({
        message: 'Data not found!'
      });
    }
  } catch (error) {
    res.status(500).json({
      message : 'Internal Server Error'
    });
  }
};

const deleteThreat = async (req, res) => {
  try {
    let resReturn;
    let threat_id = req.params.id;

    //check exists
    const fThreat = await getThreatByID(threat_id);
    if (fThreat != null) {
      resReturn = await deleteTh(threat_id);
      res.status(204).send({
        message : 'Data Deleted'
      });
    } else {
      res.send({
        message: 'Data not found!'
      });
    }
    
  } catch (error) {
    res.status(500).json({
      message : 'Internal Server Error'
    });
  }
};

  module.exports = {
    get, getByID, addThreat, updateThreat, deleteThreat
  }