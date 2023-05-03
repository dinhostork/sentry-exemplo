import { Router, Request, Response } from "express";

const router = Router();
const slug = "/";

router.get("/", (req: Request, res: Response) => {
  return res.send("Test route");
});

router.get("/error", (req: Request, res: Response) => {
  throw new Error("Error");
});

router.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

export { router, slug };
