import express from "express";
import apiRouter from "./routers/apiRouter";
import cors from "cors";
import coinRouter from "./routers/coinRouter";

const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}` }));
app.use(express.urlencoded({ extended: true }));

app.use("/img", express.static("img"));

app.use("/api", apiRouter);
app.use("/coin", coinRouter);

export default app;
