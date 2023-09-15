import express from "express";
import { getMarketData, home } from "../controllers/globalControllers";

const router = express.Router();

router.get("/market-data", getMarketData);

export default router;
