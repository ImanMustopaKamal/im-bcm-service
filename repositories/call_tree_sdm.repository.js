const prisma = require("../config/database");

const findAll = async() => {
    const sdm = await prisma.call_tree_sdm.findMany();
    
    return sdm;
};

module.exports = {
    findAll
};