const { jsonFormater } = require("../helpers");

const {
    getAllApps, getAppsByID, addNewApps, updateApps, deleteApps
  } = require("../services/application.service");
  
  const get = async (req, res) => {

    const apps = await getAllApps(req, res);
  
    jsonFormater.success(res, apps, "Application retrieved", 200);
  };

  const getByID = async (req, res) => {
    const apps = await getAppsByID(req.params.id);

    jsonFormater.success(res, apps, "Application retrieved", 200);
  };

  const addApps = async (req,res) => {
    const { body } = req;    
    const application = await addNewApps(body);

    jsonFormater.success(res, application, "Application created", 201);
  };

  const update = async (req, res) => {
    let apps_id = req.params.id;

    //check exists
    const fApps = await getAppsByID(apps_id);

    if (fApps != null) {
        const { body } = req;
      const application = await updateApps(apps_id, body);
      jsonFormater.success(res, application, "Application Updated", 200);
    }else {
        jsonFormater.error(res, application, "Application data not found", 201);
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