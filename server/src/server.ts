import express from "express";
import apiRouter from "./routers/apiRouter";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/coins", coinRouter);

export default app;
