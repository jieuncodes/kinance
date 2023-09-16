import express from "express";
import { getMarketData, home } from "../controllers/globalControllers";

const rootRouter = express.Router();

rootRouter.get("/market-data", getMarketData);

export default rootRouter;
