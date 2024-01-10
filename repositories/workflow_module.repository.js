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
        }
    })

    return wfModule
};

const changeWfModule = async (code, data) => {
    const wfModule = await prisma.workflow_module.update({
        where : {
            "code" : code
        },
        "data" : data
    });

    return wfModule;
};

const removeWfModule = async(code) => {
    const wfModule = await prisma.workflow_module.delete({
        where : {
            "code" : code
        }
    });
    return wfModule
};
module.exports = {
    storeWfModule, findAll, findBy, changeWfModule, removeWfModule
}