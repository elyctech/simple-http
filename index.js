require("app-module-path").addPath(__dirname + "/dist");

module.exports = require("app/simple-http/service.js").default;