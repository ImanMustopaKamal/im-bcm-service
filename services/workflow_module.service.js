const { func } = require("../helpers");
const { storeWfModule, findAll, findBy, changeWfModule, removeWfModule } = require("../repositories/workflow_module.repository")

const addNewWfModule = async (tenant_id, user_id, body) => {
    const data = {
        ...body,
        "tenant_id" : tenant_id,
        "is_active" : true,
        "created_by" : user_id
    }

    const wfModule = await storeWfModule(data);
    return wfModule;
};

const getAll = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    const tenant_id = res.tenant_id;
    let filter = {
        where : {
            "tenant_id" : tenant_id
        }
    }

    if (!func.isNull(query.code)) {
        filter.where["code"] = query.code
    }
    if(!func.isNull(query.is_active)) {
        filter.where["is_active"] = query.is_active === "true";
    }

    if(!func.isNull(query.name)){
        const nameFilter = {
            contains : query.name
        };
        filter.where['name'] = nameFilter;
    }

    const result = await findAll(filter, pagiante);
    return result;
};

const getByCode = async (tenant_id, code) => {
    const wfModule = await findBy(tenant_id, "code", code);

    return wfModule;
};
const updateByCode = async(code, data) => {
    const wfModule = await changeWfModule(code, data);

    return wfModule;
};

const deleteByCode = async(code) => {
    const wfModule = await removeWfModule(code);

    return wfModule;
};

module.exports = {
    addNewWfModule, getAll, getByCode, updateByCode, deleteByCode
};