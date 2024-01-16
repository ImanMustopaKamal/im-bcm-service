const { addNewWfModule, getAll, getByID, updateByID, deleteByID } = require("../services/workflow_module.service");
const { response } = require("../helpers")

const addWfModule = async (req,res) => {
    const { body } = req;
    const tenant_id = res.tenant_id;
    const user_id = res.user_id;

    const wfModule = await addNewWfModule(tenant_id, user_id, body);
    response.success(res, wfModule, "Workflow Module is created!", 201)
};

const get = async (req,res) => {
    const { dataCount, data } = await getAll(req,res);

    response.successWithDataCount(res, dataCount, data, "Workflow Module retrieved!", 200);
};

const getBy = async (req,res) => {
    const { id } = req.params;
    const tenant_id = res.tenant_id;
    const wfModule = await getByCode(tenant_id, id);

    response.success(res, wfModule, "Workflow Module retrieved!", 200);
};

const update = async (req,res) => {
    const { id } = req.params;
    const { body } = req;

    const wfModule = await updateByCode(id, body);

    response.success(res, wfModule, "Workflow Module updated!", 200);
};

const deleteWfModule = async(req,res) => {
    const { id } = req.params;
    const wfModule = await deleteByCode(id);
    response.success(res, wfModule, "Workflow Module deleted!", 200);
};

module.exports = {
    addWfModule, get, getBy, update, deleteWfModule
};