const {
    getAll,
  } = require("../services/call_tree_sdm.service");
  
  const get = async (req, res) => {
    const sdm = await getAll();
  
    res.send(sdm);
  };
  
  module.exports = {
    get,
  }