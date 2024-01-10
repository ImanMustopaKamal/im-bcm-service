const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const { findAll, findBy, storeWfLevel, changeWfLevel, removeWfLevel } = require("../repositories/workflow_level.repository");

const getAll = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;

    let filter = {
        where : {}
    }

    if (!func.isNull(query.module_code)) {
        filter.where["wf_module_code"] = query.module_code;
    }
    
    const result = await findAll(filter, pagiante);
    return result;
};

const getById = async (id) => {
    const wf_level = await findBy("id", id);

    return wf_level;
};

const addNewWfLevel = async (user_id, body) => {
    const data = {
        ...body,
        "id" : nanoid(12),
        "created_by" : user_id
    };
    const wf_level = await storeWfLevel(data);
    return wf_level;
};
const updateWfLevel = async (id, user_id, body) => {
    const data = {
        ...body,
        "updated_by" : user_id
    }
    const wf_level = await changeWfLevel(id, data);

    return wf_level;
};

const deleteWfLevel = async (id) => {
    const wf_level = await removeWfLevel(id);

    return wf_level;
};

module.exports = {
    getAll, getById, addNewWfLevel, updateWfLevel, deleteWfLevel
};