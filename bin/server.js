#!/usr/bin/env node

"use strict";

const simpleHttp = require("../index");

const documentRoot  = process.argv[2],
      serverPort    = process.argv[3];

// TODO this should not be index
simpleHttp.createServer(documentRoot).listen(serverPort, () =>
{
  console.log("SimpleHTTP Server is running.");
  console.log("  Document Root :", documentRoot);
  console.log("  Server Port   :", serverPort);
});
