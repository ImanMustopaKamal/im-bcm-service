const { nanoid : newID } = require('nanoid');

const {
    getAllApps, getAppsByID, addNewApps, updateApps, deleteApps
  } = require("../services/application.service");
  
  const get = async (req, res) => {
    let jsonFilter = { 
        where : {

        },
        orderBy : { 
          name : 'asc'} 
    };

    if (req.query.is_active != null){
        jsonFilter.where['is_active'] = req.query.is_active === 'true';
      }

      if (req.query.code != null){
        let codeFilter = {
          contains : req.query.code
        };
        jsonFilter.where['code'] = codeFilter;
      }

    if (req.query.name != null){
        let nameFilter = {
          contains : req.query.name
        };
        jsonFilter.where['name'] = nameFilter;
      }

    const apps = await getAllApps(jsonFilter);
  
    res.send(apps);
  };

  const getByID = async (req, res) => {
    const apps = await getAppsByID(req.params.id);

    res.send(apps);
  };

  const addApps = async (req,res) => {
    let newApps = {
        id : newID(),
        code : req.body.code,
        name : req.body.name,
        is_active : true,
      };
      const nApps = await addNewApps(newApps);
  
      res.status(201).json(nApps);
  };

  const update = async (req, res) => {
    let apps_id = req.params.id;

    //check exists
    const fApps = await getAppsByID(apps_id);

    if (fApps != null) {
      let data = {
        code : req.body.code,
        name : req.body.name,
        severity : req.body.severity,
        is_active : req.body.is_active
      };
      const application = await updateApps(apps_id, data);
      res.send(application);
    }else {
      res.send({
        message: 'Data not found!'
      });
    }
  };

  const deleteAp = async (req, res) => {
    let resReturn;
    let apps_id = req.params.id;

    //check exists
    const fThreat = await getAppsByID(apps_id);
    if (fThreat != null) {
      resReturn = await deleteApps(apps_id);
      res.status(204).send({
        message : 'Data Deleted'
      });
    } else {
      res.send({
        message: 'Data not found!'
      });
    }
  };
  
  module.exports = {
    get, getByID, addApps, update, deleteAp
  }