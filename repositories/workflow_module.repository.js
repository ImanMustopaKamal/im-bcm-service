const prisma = require("../config/database");

const storeWfModule = async (data) => {
    const wfModule = await prisma.workflow_module.create({
        "data" : data
    });

    return wfModule;
};

const findAll = async (filter, pagiante) => {
    const wfModule = await prisma.workflow_module.findMany({
        ...filter,
        take : pagiante.limit,
        skip : pagiante.offset,
        orderBy : {
            "sys_code" : {
                sort : "asc",
                nulls : "first"
            }
        }
    });
    const wfCount = await prisma.workflow_module.count({
        ...filter
    });

    return {
        dataCount : wfCount,
        data : wfModule
    }
};

const findBy = async (tenant_id, key, value) => {
    const wfModule = await prisma.workflow_module.findFirst({
        where : {
            "tenant_id" : tenant_id,
            [key] : value
        },
        include : {
            workflow_level : true
        }
    })

    return wfModule
};

const changeWfModule = async (id, data) => {
    const wfModule = await prisma.workflow_module.update({
        where : {
            "id" : id
        },
        "data" : data
    });

    return wfModule;
};

const removeWfModule = async(id) => {
    const wfModule = await prisma.workflow_module.delete({
        where : {
            "id" : id
        }
    });
    return wfModule
};
module.exports = {
    storeWfModule, findAll, findBy, changeWfModule, removeWfModule
}