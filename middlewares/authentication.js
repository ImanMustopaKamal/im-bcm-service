const jwt_decode = require("jwt-decode");
const { response, func } = require("../helpers");

const authToken = async (req, res, next) => {
  if (!func.isNull(req.headers["authorization"])) {
    try {
      let data = jwt_decode(req.headers["authorization"]);
      const tenant_id = data["custom:tenant_id"];
      const user_id = data["custom:user_id"];
      if (func.isNull(tenant_id) || func.isNull(user_id)) {
        return response.forbidden(
          res,
          null,
          "Token is missing or invalid!",
          401
        );
      } else {
        res.tenant_id = tenant_id;
        res.user_id = user_id;
      }
    } catch (error) {
      return response.forbidden(res, null, "Token is missing or invalid!", 401);
    }
  } else {
    return response.forbidden(res, null, "Token is missing or invalid!", 401);
  }
  next();
};

module.exports = {
  authToken,
};
