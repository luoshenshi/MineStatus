const axios = require("axios").default;

class MineStatus {
  constructor() {}

  getJavaServerStatus(server_name, portOrCallback, callback) {
    let url = `https://api.mcstatus.io/v2/status/java/${server_name}`;

    if (portOrCallback && typeof portOrCallback !== "function") {
      url += `:${portOrCallback}`;
    }

    let options = {
      method: "GET",
      url: url,
      headers: {
        Accept: "*/*",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (typeof portOrCallback === "function") {
          portOrCallback(response.data);
        } else {
          callback(response.data);
        }
      })
      .catch(() => {
        console.error("Error fetching java server status");
      });
  }

  getJavaServerWidget(server_name, portOrCallback, callback) {
    let url = `https://api.mcstatus.io/v2/widget/java/${server_name}`;

    if (portOrCallback && typeof portOrCallback !== "function") {
      url += `:${portOrCallback}`;
    }

    let options = {
      method: "GET",
      url: url,
      headers: {
        Accept: "*/*",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (typeof portOrCallback === "function") {
          portOrCallback(response.data);
        } else {
          callback(response.data);
        }
      })
      .catch(() => {
        console.error("Error fetching java server widget");
      });
  }
  getBedrockServerStatus(server_name, portOrCallback, callback) {
    let url = `https://api.mcstatus.io/v2/status/bedrock/${server_name}`;

    if (portOrCallback && typeof portOrCallback !== "function") {
      url += `:${portOrCallback}`;
    }

    let options = {
      method: "GET",
      url: url,
      headers: {
        Accept: "*/*",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (typeof portOrCallback === "function") {
          portOrCallback(response.data);
        } else {
          callback(response.data);
        }
      })
      .catch(() => {
        console.error("Error fetching bedrock server status");
      });
  }
  getServerIcon(server_name, portOrCallback, callback) {
    let url = `https://api.mcstatus.io/v2/icon/${server_name}`;

    if (portOrCallback && typeof portOrCallback !== "function") {
      url += `:${portOrCallback}`;
    }

    let options = {
      method: "GET",
      url: url,
      headers: {
        Accept: "*/*",
      },
      responseType: "arraybuffer",
    };

    axios
      .request(options)
      .then((response) => {
        if (typeof portOrCallback === "function") {
          portOrCallback(response.data);
        } else {
          callback(response.data);
        }
      })
      .catch(() => {
        console.error("Error fetching server icon");
      });
  }
}

module.exports = { MineStatus };