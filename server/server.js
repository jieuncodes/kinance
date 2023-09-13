import express from "express";
import rootRouter from "./routers/rootRouter";

const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
