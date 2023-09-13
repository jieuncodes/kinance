import express from "express";
import { home } from "../controllers/globalControllers";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
