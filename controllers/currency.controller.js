const { response } = require("../helpers");
const { 
    getAll, findByCode
} = require("../services/currency.service");

const get = async (req, res) => {
    const curr = await getAll(req, res);
    
    response.success(res, curr, "Currency retrieved!", 200);
};

const getByCode = async (req, res) => {
    const { code } =  req.params;
    const tenant_id = req.tenant_id;
    const curr = await findByCode(tenant_id, code);

    response.success(res, curr, "Currency retrieved!", 200);
};

module.exports = {
    get, getByCode
  }