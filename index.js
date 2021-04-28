import Hapi from "@hapi/hapi";
import { getRoutes } from "./routes/index.js";

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // an array of origins or 'ignore'
      },
    },
  });
  server.route(getRoutes());

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
