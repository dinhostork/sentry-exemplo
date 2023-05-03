import { Router, Request, Response } from "express";

const router = Router();
const slug = "/test";

router.get("/", (req: Request, res: Response) => {
  return res.send("Test route");
});

router.get("/error", (req: Request, res: Response) => {
  throw new Error("Error");
});

export { router, slug };
