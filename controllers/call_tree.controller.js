const { response } = require("../helpers");
const { storeService, getAllService } = require("../services/call_tree.service");

const getData = async (req, res) => {
  try {
    const { dataCount, data } = await getAllService(req, res);

    response.successWithDataCount(res, dataCount, data, "Call Tree SDM retrieved", 200);
  } catch (error) {
    console.log("🚀 ~ file: call_tree.controller.js:10 ~ getData ~ error:", error)
    response.error(res, null, "Call Tree SDM failed to retrieve", 500);
  }
};

const storeData = async (req, res) => {
  try {
    const data = await storeService(req, res);

    response.success(res, null, "Call Tree Module is created!", 201);
  } catch (error) {
    console.log(
      "🚀 ~ file: call_tree.controller.js:13 ~ storeData ~ error:",
      error
    );
    // console.log("error: ", error);
    response.error(res, null, "Call Tree Module is failed to create!", 500);
  }
};

module.exports = {
  getData,
  storeData,
};
