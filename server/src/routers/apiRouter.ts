import express from "express";
import { getMarket, home } from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/market-data", getMarket);

export default apiRouter;
