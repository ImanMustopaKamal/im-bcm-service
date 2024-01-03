const { response } = require("../helpers");
const { 
    getAll, findByID
} = require("../services/indirect_unit.service");

const get = async (req, res) => {
    const iu = await getAll(req, res);
    
    response.success(res, iu, "Staff Condition retrieved!", 200);
};

const getByID = async (req, res) => {
    const { id } =  req.params;
    const tenant_id = res.tenant_id;
    const iu = await findByID(tenant_id, id);

    response.success(res, iu, "Staff Condition retrieved!", 200);
};

module.exports = {
    get, getByID
  }