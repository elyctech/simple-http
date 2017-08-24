import SimpleHttpService  from "lib/simple-http/service.type";

import * as fs            from "fs";
import * as http          from "http";
import * as path          from "path";
import * as url           from "url";

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
      let file    = documentRoot + url.parse(request.url).pathname;

      if (fs.existsSync(file + "/index.html"))
      {
        response.end(
          fs.readFileSync(file + "/index.html")
        );
      }
      else if (fs.existsSync(file) && fs.statSync(file).isFile())
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
