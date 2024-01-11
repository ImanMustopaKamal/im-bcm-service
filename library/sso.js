const axios = require("axios");
const { SSO_URL } = process.env;

class SSO {
  #sso_url = SSO_URL;

  constructor() {}

  getOrganizations = async (id) => {
    try {
      const url = `${this.#sso_url}/qr_codes/${id}`;
      const headers = {
        // Authorization: `Basic ${this.#xendit_secret_key}`,
        "api-version": "this.#xendit_api_version",
      };

      const qrCode = await axios.get(url, { headers });

      return qrCode.data;
    } catch (error) {
      throw Error(error.message);
    }
  };

  getName() {
    return this.#sso_url;
  }
}

module.exports = SSO;
