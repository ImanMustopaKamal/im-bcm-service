const { nanoid } = require("nanoid");

const {
    findApplications, findByID, createApplication, updateApplications, deleteApplications
  } = require("../repositories/application.repository");
  
  const getAllApps = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    let whereCond = { };

    if (query.is_active != null){
        whereCond['is_active'] = req.query.is_active === 'true';
      }

    if (query.code != null){
        let codeFilter = {
            contains : req.query.code
        };
        whereCond['code'] = codeFilter;
    }

    if (query.name != null){
        let nameFilter = {
          contains : req.query.name
        };
        whereCond['name'] = nameFilter;
      }
    const apps = await findApplications(whereCond, pagiante);
  
    return apps;
  };

  const getAppsByID = async (id) => {
    const apps = await findByID(id);

    return apps;
  };

  const addNewApps = async (data) => {
    let newApps = {
        ...data,
        id : nanoid(),
        is_active : true,
      };
    const cApps = await createApplication(newApps);

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
  