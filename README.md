## MineStatus

This npm package lets you obtain information about Minecraft servers for both Java and Bedrock.

**Note:** *May not be compatible with Aternos Servers*

### Getting Started

```bash
npm i mine-status
```

```javascript
const { MineStatus } = require("mine-status");

const minestatus = new MineStatus();
//without port
minestatus.getJavaServerStatus("hypixel.net", (response) => {
  console.log(response);
});
```

OR

```javascript
const { MineStatus } = require("mine-status");

const minestatus = new MineStatus();
//with port
minestatus.getJavaServerStatus("hypixel.net", 25565, (response) => {
  console.log(response);
});
```

And you can also check out many more...

### Functions:

- getJavaServerStatus(server_name, portOrCallback, callback);
- getJavaServerWidget(server_name, portOrCallback, callback);
- getBedrockServerStatus(server_name, portOrCallback, callback);
- getServerIcon(server_name, portOrCallback, callback);