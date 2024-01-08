const { findOne, getBy } = require("../repositories/org_structure.repository")
const { func, response } = require("../helpers")
const createValidator = async(req,res,next) => {
    const { org_id } = req.body;
    let filter = {
        where : {}
    }
    if (func.isNull(org_id)) {
        return response.badRequest(res, null, "Organisation is not exists", 404);
    }else {
        filter.where["org_id"] = org_id;
    }
    
    const stc = await findOne(filter)
    if (stc) {
        return response.badRequest(res, null, "Organisation is already mapped in the structure", 404);
    }
    next();
};

const deleteValidator= async(req,res, next) => {
    const { id } = req.params;
    const org = await getBy("id", id);
    if (!org) {
        return response.badRequest(res, null, "Data not found", 404);
    } else {
        const org_id = org.org_id;
        const filter = {
            where : {
                "parent_org_id" : org_id
            }
        }
        const childOrg = await findOne(filter);
        if (childOrg) {
            return response.badRequest(res, null, "Cannot delete organisation structure has child!", 404);
        }
    }
    next();
};

module.exports = {
    createValidator, deleteValidator
};