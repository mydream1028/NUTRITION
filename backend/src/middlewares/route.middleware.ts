import { Request, Response, NextFunction } from "express";

import { Env } from "@/env";
import { Logger } from "@/utils";

export const routeMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.path !== "/health") {
    Logger.group({
      title: "New Request",
      descriptions: [
        {
          description: "URL",
          info: `${req.protocol}://${req.hostname}:${Env.port}${req.url}`,
        },
        {
          description: "PARAMS",
          info: req.params,
        },
        {
          description: "QUERY",
          info: JSON.stringify(req.query),
        },
        {
          description: "BODY",
          info: JSON.stringify(req.body),
        },
      ],
    });
    Logger.groupEnd();
  }
  next();
};
