# Websy

Websy is an HTTP library designed for simplicity. Its scope is limited to the minimum required to work with HTTP
requests and responses.

Currently, Websy only provides an HTTP file server.

```bash
# Install locally to use module
$ npm install websy
$ yarn add websy

# Install globally to use the CLI
$ npm install -g websy
$ yarn global add websy
```

## Websy Server

Websy Server is a Node.js HTTP server configured to respond to requests with either the file requested relative to the
given document root, or a 404 response if no such file is found. If the request URI leads to a directory, Websy looks
for a file called `index.html` inside of that directory.

Websy provides a CLI to start a Websy server:

```bash
$ websy-server ./document-root 8080
Websy Server is running.
  Document Root : ./document-root
  Server Port   : 8080

```

Alternatively, a Websy server can be created through the Node.js module:

```typescript
var websy = require("websy");

var websyServer = websy.createServer("./document-root");

websyServer.listen(8080);

```
