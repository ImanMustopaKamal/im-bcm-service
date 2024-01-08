const pagination = require("./pagination");
const applicationMiddleware = require("./application");
const threatTypeMiddleware = require("./threat_type");
const threatMiddleware = require("./threat");
const authMiddleware = require("./authentication");
const orgStructureMiddleware = require("./org_structure");
const wfModuleMiddleware = require("./workflow_module")

module.exports = {
  pagination,
  threatTypeMiddleware,
  applicationMiddleware,
  threatMiddleware,
  authMiddleware,
  orgStructureMiddleware,
  wfModuleMiddleware
};
