import express from "express";
import { getCoinInfo, home } from "../controllers/globalControllers";

const rootRouter = express.Router();

rootRouter.get("/market-data", getCoinInfo);

export default rootRouter;
