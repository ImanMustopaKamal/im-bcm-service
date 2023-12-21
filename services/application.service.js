const {
    findApplications, findByID, createApplication, updateApplications, deleteApplications
  } = require("../repositories/application.repository");
  
  const getAllApps = async (filter) => {
    const apps = await findApplications(filter);
  
    return apps;
  };

  const getAppsByID = async (id) => {
    const apps = await findByID(id);

    return apps;
  };

  const addNewApps = async (data) => {
    const cApps = await createApplication(data);

    return cApps;
  };

  const updateApps = async (apps_id, data) => {
    const uApps = await updateApplications(apps_id, data);

    return uApps;
  };

  const deleteApps = async (apps_id) => {
    const dApps = await deleteApplications(apps_id);

    return dApps;
  };
  
  module.exports = {
    getAllApps, getAppsByID, addNewApps, updateApps, deleteApps
  };
  