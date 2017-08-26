#!/usr/bin/env node

"use strict";

const simpleHttp = require("../index");

const documentRoot  = process.argv[2],
      serverPort    = process.argv[3];

simpleHttp.createServer(documentRoot).listen(serverPort, () =>
{
  console.log("Websy Server is running.");
  console.log("  Document Root :", documentRoot);
  console.log("  Server Port   :", serverPort);
});
