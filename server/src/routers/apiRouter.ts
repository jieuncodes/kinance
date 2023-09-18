import express from "express";
import { getCoinSparkLine, getMarket } from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/market-data", getMarket);
apiRouter.get("/spark-line/:id", getCoinSparkLine);
export default apiRouter;
