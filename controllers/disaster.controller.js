const { response } = require("../helpers");
const {
    addNewDisaster, getDisasterByID, getAll
  } = require("../services/disaster.service");

const addDisaster = async (req,res) => {
    const { body } = req;
    const tenant_id = res.tenant_id;
    const user_id = res.user_id;

    const result = await addNewDisaster(tenant_id, user_id, body);

    response.success(res, result, "Disaster data created!", 201);
};

const getByID = async (req, res) => {
    const { id } = req.params;
    const data = await getDisasterByID(id);

    response.success(res, data, "Disaster data retrieved!", 200);
};

const getAllDisasters = async (req, res) => {
    const data = await getAll(req, res);
    
    response.success(res, data, "Disaster data retrieved!", 200);
};

module.exports = {
    addDisaster, getByID, getAllDisasters
};