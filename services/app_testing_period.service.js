const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/app_testing_period.repository");

const getAll = async (req, res) => {
    const { query } = req;
    let filter = {
        where : {}
    };

    if (!func.isNull(query.is_active)) {
        where["is_active"] =  query.is_active === 'true'; 
    }
    if (!func.isNull(query.name)) {
        let nameFilter = {
            contains : query.name
        }
        filter["name"] = nameFilter;
    }
    const atp = await findAll(filter);

    return atp;
};

const findByCode = async (code) => {
    const atp = findBy("code", code);

    return atp;
};
module.exports = {
    getAll, findByCode
};
