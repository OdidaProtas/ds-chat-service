import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import "dotenv/config";
import * as cors from "cors";
import { handleSocketConnection } from "./controller/SocketController";
import fetchUser from "./util/fetchUser";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    const http = require("http");
    const server = http.createServer(app);
    // setup websocket server
    const io = require("socket.io")(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.use(async (socket, next) => {
      try {
        // const user = await fetchUser(soc/ket);
        socket.user = socket?.auth?.id;
      } catch (e) {
        next(new Error("unknown user"));
      }
    });

    io.on("connection", handleSocketConnection);

    app.use((request: Request, response: Response, next: NextFunction) => {
      request["socket"] = io;
      next();
    });

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // start express server
    server.listen(process.env.PORT);

    console.log("Express server has started");
  })
  .catch((error) => console.log(error));
