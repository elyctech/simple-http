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
    if (fs.statSync(documentRoot).isDirectory())
    {
      documentRoot = path.normalize(documentRoot);

      if (documentRoot.endsWith("/"))
      {
        documentRoot = documentRoot.slice(0, -1);
      }
    }
    else
    {
      throw new Error("'documentRoot' must be a directory");
    }

    return http.createServer((
      request   : http.IncomingMessage,
      response  : http.ServerResponse
    ) =>
    {
      let file = documentRoot + request.url;

      if (fs.existsSync(file))
      {
        response.end(
          fs.readFileSync(file)
        );
      }
      else
      {
        response.writeHead(404);
        response.end();
      }
    });
  }
}

export default StandardSimpleHttpService;
