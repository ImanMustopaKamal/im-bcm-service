const prisma = require("../config/database");

const countAll = async (filter) => {
    const wfCount = await prisma.workflow_level.count({
        ...filter
    });

    return wfCount;
};

const findAll = async (filter, pagiante) => {
    const wf_level = await prisma.workflow_level.findMany({
        ...filter,
        take : pagiante.limit,
        skip : pagiante.offset,
        orderBy : [ {
                wf_module_code : "asc"
            },{
                level : "asc"
            }
        ]
    });

    const wf_count = await prisma.workflow_level.count({
        ...filter
    }
    );

    return {
        dataCount : wf_count,
        data : wf_level
    }
};

const findBy = async (key, value) => {
    const wf_level = await prisma.workflow_level.findFirst({
        where : {
            [key] : value
        }
    });

    return wf_level
};

const storeWfLevel = async (data) => {
    const wf_level = await prisma.workflow_level.create({
        "data" : data
    });

    return wf_level;
};

const changeWfLevel = async (id, data) => {
    const wf_level = await prisma.workflow_level.update({
        where : {
            "id" : id
        },
        "data" : data
    });

    return wf_level;
};

const removeWfLevel = async (id) => {
    const wf_level = await prisma.workflow_level.delete({
        where : {
            "id" : id
        }
    });

    return wf_level;
};

const findNext = async (filter) => {
    const wf_level = await prisma.workflow_level.findFirst({
        ...filter
    });

    return findNext;
};

module.exports = {
    findAll, findBy, storeWfLevel, changeWfLevel, removeWfLevel, countAll, findNext
};