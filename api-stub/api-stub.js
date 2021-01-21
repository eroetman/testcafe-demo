var API = require("api-stub");
var config = [
  {
    path: "/health",
    data: { status: true },
  },
];
var server = new API(config);
server.start(3000);
