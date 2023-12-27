const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/staff_condition.repository");

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
    const sc = await findAll(filter);

    return sc;
};

const findByID = async (id) => {
    const sc = findBy("id", id);

    return sc;
};
module.exports = {
    getAll, findByID
};
