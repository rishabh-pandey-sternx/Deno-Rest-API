import {
  App,
  logger,
  parser,
  staticServe,
} from "https://deno.land/x/attain/mod.ts";
import { APP_PORT, API_PREFIX, API_VERSION } from "./src/config.ts";
import router from "./src/routes/index.ts";

(async () => {
  const port = APP_PORT;
  const app = new App();

  // Logging response method status path time
  app.use(logger);
  // Parsing the request body and save it to request.params
  // Also, updated to parse the queries from search params
  app.use(parser);
  // Serve static files
  // This path must be started from your command line path.
  app.use(staticServe("./public/index.html", { maxAge: 1000 }));
  // Mounted All API's
  app.get(`/${API_PREFIX}/${API_VERSION}`, router);
  app.listen({ port, debug: true });
  console.log(`Server Running on: http://localhost:${port}`);
})();
