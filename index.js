const serverless = require("serverless-http");
const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

require("./routes/workflow_module.routes")(app);
require("./routes/org_structure.routes")(app);
require("./routes/disaster.route")(app);
require("./routes/currency.routes")(app);
require("./routes/app_testing_period.routes")(app);
require("./routes/indirect_unit.routes")(app);
require("./routes/staff_condition.routes")(app);
require("./routes/threat.routes")(app);
require("./routes/application.routes")(app);
require("./routes/404.routes")(app);


module.exports.handler = serverless(app);
