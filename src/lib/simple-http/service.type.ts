import * as http from "http";

interface SimpleHttpService
{
  createServer(
    documentRoot: string
  ): http.Server;
}

export default SimpleHttpService;
