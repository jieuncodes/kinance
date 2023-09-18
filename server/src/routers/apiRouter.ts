import express from "express";
import {
  getCoinDetail,
  getCoinsWithSparkLine,
  getMarket,
} from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/market-data", getMarket);
apiRouter.get("/detailed-coins-data", getCoinsWithSparkLine);
apiRouter.get("/coinDetail/:id", getCoinDetail);

export default apiRouter;
