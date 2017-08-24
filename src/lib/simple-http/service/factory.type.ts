import SimpleHttpService from "lib/simple-http/service.type";

interface SimpleHttpServiceFactory
{
  construct(): SimpleHttpService;
}

export default SimpleHttpServiceFactory;
