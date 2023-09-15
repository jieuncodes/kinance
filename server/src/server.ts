import express from "express";
import rootRouter from "./routers/rootRouter";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);

export default app;
