const { findAll } = require("../repositories/sys_process_list.repository");

const getAll = async () => {
    const sys_proc = await findAll();
    return sys_proc;
};

module.exports = {
    getAll
};