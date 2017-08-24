import SimpleHttpService  from "lib/simple-http/service.type";

import * as fs            from "fs";
import * as http          from "http";
import * as path          from "path";

class StandardSimpleHttpService implements SimpleHttpService
{
  createServer(
    documentRoot: string
  ): http.Server
  {
    return http.createServer((
      request   : http.IncomingMessage,
      response  : http.ServerResponse) =>
    {
      response.end("Hello, world!");
    });
  }
}

export default StandardSimpleHttpService;
