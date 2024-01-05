const prisma = require("../config/database");

const storeStructure = async (data) => {
    const org = await prisma.org_structure.create({
        "data" : data
    });

    return org;
};

const changeStructure = async (id, data) => {
    const org = await prisma.org_structure.update({
        where: {
            "id" : id
        },
        "data" : data
    });

    return org;
};

const removeStrcture = async (id) => {
    const org = prisma.org_structure.delete({
        where : {
            "id" : id
        }
    });

    return org;
};

const getBy = async (key, value) => {
    const org = prisma.org_structure.findUnique({
        where : {
            [key] : value
        }
    });

    return org;
};

const getAll = async (filter, pagiante) => {
    const orgs = await prisma.org_structure.findMany({
        ...filter,
        take: pagiante.limit,
        skip: pagiante.offset,
        orderBy : {
            parent_org_id : {
                sort : "asc",
                nulls : "first"
            }
        
        }
    });
    const orgCount = await prisma.org_structure.count({
        ...filter
    });

    return { 
        datacount: orgCount,
        data : orgs
    };
};

const findOne = async (filter) => {
    const org = prisma.org_structure.findFirst({
        ...filter
    });

    return org;
};
module.exports = {
    storeStructure, changeStructure, removeStrcture, getBy, getAll, findOne
};