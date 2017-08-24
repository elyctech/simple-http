import SimpleHttpService         from "lib/simple-http/service.type";
import SimpleHttpServiceFactory  from "lib/simple-http/service/factory.type";
import StandardSimpleHttpService from "lib/simple-http/service.class";

class StandardSimpleHttpServiceFactory implements SimpleHttpServiceFactory
{
  construct(): SimpleHttpService
  {
    return new StandardSimpleHttpService();
  }
}

export default StandardSimpleHttpServiceFactory;
