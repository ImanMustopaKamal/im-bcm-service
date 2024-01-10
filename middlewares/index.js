const pagination = require("./pagination");
const applicationMiddleware = require("./application");
const threatTypeMiddleware = require("./threat_type");
const threatMiddleware = require("./threat");
const authMiddleware = require("./authentication");
const orgStructureMiddleware = require("./org_structure");
<<<<<<< HEAD
const wfModuleMiddleware = require("./workflow_module")
const callTreeMiddleware = require("./call_tree")
const fileMiddleware = require("./file")
=======
const wfModuleMiddleware = require("./workflow_module");
const wfLevelMiddleware = require("./workflow_level");
>>>>>>> e49a83a54c99e28a3d5659d953b81c748d9ec9df

module.exports = {
  pagination,
  threatTypeMiddleware,
  applicationMiddleware,
  threatMiddleware,
  authMiddleware,
  orgStructureMiddleware,
  wfModuleMiddleware,
<<<<<<< HEAD
  callTreeMiddleware,
  fileMiddleware
=======
  wfLevelMiddleware
>>>>>>> e49a83a54c99e28a3d5659d953b81c748d9ec9df
};
