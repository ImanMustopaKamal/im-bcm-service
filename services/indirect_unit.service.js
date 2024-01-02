const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/indirect_unit.repository");

const getAll = async (req, res) => {
    const { query } = req;
    const tenant_id = req.tenant_id;
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
    const iu = await findAll(filter);

    return iu;
};

const findByID = async (tenant_id, id) => {
    const iu = findBy(tenant_id, "id", id);

    return iu;
};
module.exports = {
    getAll, findByID
};
