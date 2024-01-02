const { response } = require("../helpers");
const { 
    getAll, findByID
} = require("../services/staff_condition.service");

const get = async (req, res) => {
    const sc = await getAll(req, res);
    
    response.success(res, sc, "Staff Condition retrieved!", 200);
};

const getByID = async (req, res) => {
    const { id } =  req.params;
    const tenant_id = req.tenant_id;
    const sc = await findByID(tenant_id, id);

    response.success(res, sc, "Staff Condition retrieved!", 200);
};

module.exports = {
    get, getByID
  }