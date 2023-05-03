import "dotenv/config";
import express from "express";
import routesList from "./routes";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routesList);
  }
}

export default new App().server;