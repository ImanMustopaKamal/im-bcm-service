const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const { storeStructure, changeStructure, removeStructure, getBy, getAll
} = require("../repositories/org_structure.repository");

const addNewStructure = async (user_id, body) => {
    const data = {
        ...body,
        "id" : nanoid(),
        "created_by" : user_id
    }
    const org = await storeStructure(data);

    return org;
};

const updateStructure = async (user_id, id, body) => {
    const data = {
        ...body,
        "updated_by" : user_id
    }
    const org = await changeStructure(id, data);

    return org;
};

const deleteStructure = async(id) => {
    const org = await removeStructure(id);

    return org;
};

const getStructureByID = async(id) => {
    const org = await getBy("id", id);

    return org;
};

const getAllStructure = async(req, res) => {
    const { pagiante } = res;
    const { query } = req;

    let filter = {
        where : { }
    };

    if (!func.isNull(query.org_id)) {
        filter.where['org_id'] = query.org_id;   
    }

    if (!func.isNull(query.org_name)) {
        const nameFilter = {
        contains : query.org_name
        };
        filter.where['org_name'] = nameFilter;
    }

    if (!func.isNull(query.parent_org_id)) {
        filter.where['parent_org_id'] = query.parent_org_id;   
    }

    if (!func.isNull(query.parent_org_name)) {
        const nameFilter = {
        contains : query.parent_org_name
        };
        filter.where['parent_org_name'] = nameFilter;
    }
    
    const result = await getAll(filter, pagiante);

    return result;
};

module.exports = {
    addNewStructure, updateStructure, deleteStructure, getStructureByID, getAllStructure
};