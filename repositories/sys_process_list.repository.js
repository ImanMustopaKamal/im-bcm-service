const prisma = require("../config/database");

const findAll = async () => {
    const sys_proc = await prisma.sys_process_list.findMany({
        where : {
            "is_active" : true
        }
    });
    return sys_proc;
};

module.exports = {
    findAll
};