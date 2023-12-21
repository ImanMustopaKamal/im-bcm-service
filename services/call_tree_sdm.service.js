const {
    findAll
} = require("../repositories/call_tree_sdm.repository");

const getAll = async () => {
    const sdm = await findAll();

    return sdm;
};

module.exports = {
    getAll
};