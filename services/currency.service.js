const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/currency.repository");

const getAll = async (req, res) => {
    const { query } = req;
    let filter = {
        where : {}
    };

    if (!func.isNull(query.is_active)) {
        filter.where["is_active"] =  query.is_active === 'true'; 
    }
    if (!func.isNull(query.name)) {
        let nameFilter = {
            contains : query.name
        }
        filter["name"] = nameFilter;
    }
    if (!func.isNull(query.code)) {
        filter.where["code"] = query.code;
    }
    const curr = await findAll(filter);

    return curr;
};

const findByCode = async (code) => {
    const curr = findBy("code", code);

    return curr;
};
module.exports = {
    getAll, findByCode
};
