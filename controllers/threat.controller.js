const { v4: uuidv4 } = require('uuid');

const {
  searchThreats, getAllThreats, getThreatByID, getThreatByType, addNewThreat, update, deleteTh
  } = require("../services/threat.service");
  
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
      if (req.query.type_id != null) {
        jsonFilter.where['type_id'] = req.query.type_id;
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
    let resReturn;
    let threat_id = req.params.id;

    //check exists
    const fThreat = await getThreatByID(threat_id);

    if (fThreat != null) {
      let data = {
        name : req.body.name,
        is_active : req.body.is_active
      };
      resReturn = await update(threat_id, data);
      res.send(resReturn);
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
      res.send(resReturn);
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