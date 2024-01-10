const { response, func } = require("../helpers");
const { findBy, findAll } = require("../repositories/workflow_module.repository");

const createValidator = async (req, res, next) => {
    const { code } = req.body;
    const tenant_id = res.tenant_id;
    const wfModule = await findBy(tenant_id, "code", code);
    if (wfModule) {
        return response.badRequest(res, null, "Code already exsists!", 404);
    }
    next();
};

const updateDeleteValidator = async (req, res, next) => {
    const { code } = req.params;
    const tenant_id = res.tenant_id;
    const wfModule = await findBy(tenant_id, "code", code);
    if (!wfModule) {
        return response.badRequest(res, null, "Code is not exsists!", 404);
    }
    next();
};

module.exports = {
    createValidator, updateDeleteValidator
};