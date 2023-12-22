const { response } = require("../helpers");
const { 
    getAll, findByCode
} = require("../services/app_testing_period.service");

const get = async (req, res) => {
    const atp = await getAll(req, res);
    
    response.success(res, atp, "Staff Condition retrieved!", 200);
};

const getByCode = async (req, res) => {
    const { code } =  req.params;
    const atp = await findByCode(code);

    response.success(res, atp, "Staff Condition retrieved!", 200);
};

module.exports = {
    get, getByCode
  }