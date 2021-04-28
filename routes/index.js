import { loginHandler } from "../handlers/login/index.js";
import StudentHandler from "StudentHandler";

export const getRoutes = () => {
  let routes = [
    {
      method: "GET",
      path: "/",
      handler: loginHandler,
    },
    {
      method: "GET",
      path: "/student",
      handler: StudentHandler.getStudent,
    },
    {
      method: 'POST',
      path: '/student',
      handler: StudentHandler.insertStudent
    },
    {
      method: 'GET',
      path: '/deleteAllStudent',
      handler: StudentHandler.removeAll
    },
    {
      method: 'POST',
      path: '/uploadResource',
      handler: (req, h) => {
        return true
      }
    }
  ];

  routes = routes.map((i) => {
    i.config = {
      state: {
        parse: false, // parse and store in request.state
        failAction: "ignore", // may also be 'ignore' or 'log'
      },
    };
    return i;
  });

  return routes;
};
