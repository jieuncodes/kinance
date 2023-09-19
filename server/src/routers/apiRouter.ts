import express from "express";
import {
  fetchCoinOHLC,
  getCoinDetail,
  getCoinsWithSparkLine,
} from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/detailed-coins-data", getCoinsWithSparkLine);
apiRouter.get("/coinDetail/:id", getCoinDetail);
apiRouter.get("/ohlc/:id", fetchCoinOHLC);
export default apiRouter;
