const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/staff_condition.repository");

const getAll = async (req, res) => {
    const { query } = req;
    const tenant_id = res.tenant_id;
    let filter = {
        where : {
            "tenant_id" : tenant_id
        }
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
    const sc = await findAll(filter);

    return sc;
};

const findByID = async (tenant_id, id) => {
    const sc = findBy(tenant_id, "id", id);

    return sc;
};
module.exports = {
    getAll, findByID
};
