const { response } = require("../helpers");
const { addNewStructure, updateStructure, deleteStructure, getStructureByID, getAllStructure } = require("../services/org_structure.service");

const addStructure = async (req,res) => {
    const { body } = req;
    const user_id = res.user_id;

    const org = await addNewStructure(user_id, body);

    response.success(res, org, "Organisation structure created!", 201)
};

const updateByID = async(req,res) => {
    const { id } = req.params;
    const { body } = req;
    const user_id = res.user_id;
    const org = await updateStructure(user_id, id, body);

    response.success(res, org, "Organisation structure updated!", 200);
};

const deleteByID = async(req,res) => {
    const { id } = req.params;

    const org = await deleteStructure(id);

    response.success(res, org, "Organisation structure deleted!", 200);
};

const getByID = async(req,res) => {
    const { id } = req.params;

    const org = await getStructureByID(id);

    response.success(res, org, "Organisation structure retrieved!", 200); 
};

const getAll = async(req,res) => {
    const { datacount, data } = await getAllStructure(req, res);

  response.successWithDataCount(res, datacount, data, "Application retrieved", 200);
};

module.exports = {
    addStructure, updateByID, deleteByID, getByID, getAll
};