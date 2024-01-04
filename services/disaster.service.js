const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
    storeNewDisaster, findByID, findAll
  } = require("../repositories/disaster.repository");
const { now } = require("moment");

const getDisasterByID = async (id) => {
    const result = await findByID(id);

    return result;
};

const getAll = async (req, res) => {
    const { query } = req;
    const { pagiante } = res;
    const tenant_id = res.tenant_id;

    let filter = {
      where : {
        "tenant_id" : tenant_id
      }
    };

    if (!func.isNull(query.orgID)) {
        filter.where["org_id"] = query.orgID;
    }

    if (!func.isNull(query.status)) {
        filter.where["wf_status_id"] = parseInt(query.status);
    }

    if (!func.isNull(query.threat)) {
        filter.where["threat"] = {
            name : {
                contains : query.threat
            }
        }
    }

    if (!func.isNull(query.location)) {
        filter.where["disaster_location"] = query.location;
    }

    let dateFrom = new Date(1900,1,1);
    let dateTo = new Date(2100,12,31);
    if (!func.isNull(query.from)) {
        dateFrom = new Date(query.from);
    }
    if (!func.isNull(query.to)) {
        dateTo = new Date(query.to);
    }

    filter.where["disaster_date"] = {
        lte : dateTo,
        gte : dateFrom
    }

    const disasters = await findAll(filter, pagiante);
    return disasters;
};

const addNewDisaster = async (tenant_id, user_id, body) => {
    const newDisasterID = nanoid();
    const { disaster, disaster_staff, disaster_direct_unit, disaster_indirect_unit, disaster_atm } = body;
    const data_disaster = {
        "id" : newDisasterID,
        "tenant_id" : tenant_id,
        ...disaster,
        "wf_status_id": 0,
        "created_by" : user_id
    };
    let data_staff = [];
    let data_dir_unit = [];
    let data_indir_unit = [];
    let data_atm = [];

    if (!func.isNull(disaster_staff)) {
        for (let index = 0; index < disaster_staff.length; index++) {
            const element = disaster_staff[index];
            element["id"] = nanoid();
            element["disaster_id"] = newDisasterID;
            data_staff.push(element);
        }   
    }
    
    if (!func.isNull(disaster_direct_unit)) {
        for (let index = 0; index < disaster_direct_unit.length; index++) {
            const element = disaster_direct_unit[index];
            element["id"] = nanoid();
            element["disaster_id"] = newDisasterID;
            data_dir_unit.push(element);
        }
    }

    if (!func.isNull(disaster_indirect_unit)) {
        for (let index = 0; index < disaster_indirect_unit.length; index++) {
            const element = disaster_indirect_unit[index];
            element["id"] = nanoid();
            element["disaster_id"] = newDisasterID;
            data_indir_unit.push(element);
        }
    }
    if (!func.isNull(disaster_atm)) {
        for (let index = 0; index < disaster_atm.length; index++) {
            const element = disaster_atm[index];
            element["id"] = nanoid();
            element["disaster_id"] = newDisasterID;
            data_atm.push(element);
        }
    }
    
    const result = await storeNewDisaster(data_disaster, data_staff, data_dir_unit, data_indir_unit, data_atm);
    return result;
};

module.exports = {
    addNewDisaster, getDisasterByID, getAll
};