import express, { Express, Request, Response } from "express";
import cors from "cors";
import { json as bodyParser } from "body-parser";

import { Env } from "@/env";
import { Logger } from "@/utils";
import { MESSAGE } from "@/constant";
import { appRouter } from "@/routes";
import { errorHandlerMiddleware, routeMiddleware } from "@/middlewares";

export const backendSetup = () => {
  const app: Express = express();

  app.use(cors());
  app.use(bodyParser());

  app.use(routeMiddleware);

  app.use("/health", (_req: Request, res: Response) => {
    res.send(MESSAGE.SERVER.HELLO_WORLD);
  });

  app.use(`/api/${Env.version}`, appRouter);

  app.use(errorHandlerMiddleware);

  const { port } = Env;

  app.listen(port, () => {
    Logger.info(MESSAGE.SERVER.STARTING_SUCCESS);
  });
};