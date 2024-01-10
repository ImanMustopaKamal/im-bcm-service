const { response } = require("../helpers");
const { getAll } = require("../services/sys_process_list.service");

const getAllProcess = async (req,res) => {
    const sys_proc = await getAll();

    response.success(res, sys_proc, "Process List retrieved!", 200);
};

module.exports = {
    getAllProcess
};