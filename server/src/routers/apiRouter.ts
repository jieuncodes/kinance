import express from "express";
import { getCoinInfo, home } from "../controllers/globalControllers";

const apiRouter = express.Router();

apiRouter.get("/market-data", getCoinInfo);

export default apiRouter;
