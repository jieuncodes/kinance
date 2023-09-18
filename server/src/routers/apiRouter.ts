import express from "express";
import {
  getCoinSparkLine,
  getCoinsWithSparkLine,
  getMarket,
} from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/market-data", getMarket);
apiRouter.get("/detailed-coins-data", getCoinsWithSparkLine);
apiRouter.get("/spark-line/:id", getCoinSparkLine);

export default apiRouter;
