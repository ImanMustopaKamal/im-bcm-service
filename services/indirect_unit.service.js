const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/indirect_unit.repository");

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
    const iu = await findAll(filter);

    return iu;
};

const findByID = async (id) => {
    const iu = findBy("id", id);

    return iu;
};
module.exports = {
    getAll, findByID
};
