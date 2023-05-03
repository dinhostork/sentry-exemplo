import "dotenv/config";
import express from "express";
import routesList from "./routes";
import * as Sentry from "@sentry/node";
import Youch from "youch";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app: this.server }),
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
      ],
    });
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(Sentry.Handlers.tracingHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routesList);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development") {
        const error = await new Youch(err, req).toJSON();
        return res.status(500).json(error);
      }
      return res.status(500).json({ error: "Internal Server Error" });
    });
  }
}

export default new App().server;
