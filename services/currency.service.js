const { func } = require("../helpers");
const { findAll, findBy
} = require("../repositories/currency.repository");

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
    if (!func.isNull(query.code)) {
        filter.where["code"] = query.code;
    }
    const curr = await findAll(filter);

    return curr;
};

const findByCode = async (tenant_id, code) => {
    const curr = findBy(tenant_id, "code", code);

    return curr;
};
module.exports = {
    getAll, findByCode
};
