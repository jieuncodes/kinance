import express from "express";
import rootRouter from "./routers/rootRouter";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: `http://localhost:${PORT}` }));
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
