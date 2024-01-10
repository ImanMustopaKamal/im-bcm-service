const { response } = require("../helpers")
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { storeService } = require("../services/call_tree.service");

const storeData = async (req, res) => {
  try {
    const data = await storeService(req, res)
    
    response.success(res, null, "Call Tree Module is created!", 201)
  } catch (error) {
    console.log("🚀 ~ file: call_tree.controller.js:13 ~ storeData ~ error:", error)
    // console.log("error: ", error);
    response.error(res, null, "Call Tree Module is failed to create!", 500)
  }
}

module.exports = {
  storeData
}