const { response } = require("../helpers");
const { countAll, findBy } = require("../repositories/workflow_level.repository");

const createValidator = async (req, res, next) => {
    const { body } = req;
    const filter = {
        where : {
            ...body
        }
    }

    const dataCount  = await countAll(filter);
    if (dataCount > 0) {
        return response.badRequest(res, null, "Workflow level already exists!", 404);
    }
    next();
};

const updateDeleteValidator = async (req, res, next) => {
    const { id } = req.params;
    const wf_level = await findBy("id", id);
    if (!wf_level) {
        return response.badRequest(res, null, "Workflow is not exists!", 404);
    }
    next();
};

module.exports = {
    createValidator, updateDeleteValidator
};