const { response } = require("../helpers");
const { getAll, getById, addNewWfLevel, updateWfLevel, deleteWfLevel } = require("../services/workflow_level.service");

const get = async (req, res) => {
    const { data, dataCount} = await getAll(req, res);

    response.successWithDataCount(res,dataCount, data, "Workflow level retrieved!", 200);
};

const getBy = async (req, res) => {
    const { id } = req.params;
    const wf_level = await getById(id);

    response.success(res, wf_level, "Workflow level retrieved!", 200);
};

const addNew = async (req, res) => {
    const user_id = res.user_id;
    const { body } = req;
    const wf_level = await addNewWfLevel(user_id, body);

    response.success(res, wf_level, "Worklflow level created!", 201)
};

const update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user_id = res.user_id;

    const wf_level = await updateWfLevel(id, user_id, body);
    response.success(res, wf_level, "Workflow level updated!", 200);
};

const deleteByID = async (req, res) => {
    const { id } = req.params;
    const wf_level = await deleteWfLevel(id);

    response.success(res, wf_level, "Workflow level deleted!", 200);
};
module.exports = {
    get, getBy, addNew, update, deleteByID
};