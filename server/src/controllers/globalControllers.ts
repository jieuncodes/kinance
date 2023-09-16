import { Request, Response } from "express";
import axios from "axios";
import { validateEnvVariable } from "../util/helpers";
import { Endpoint, ReqInfo } from "../type/marketTypes";

export const home = (req: Request, res: Response): void => {
  res.send("Hello");
};

export const getMarketData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const requireInfo: ReqInfo = req.query.requireInfo as ReqInfo;
  const endpoint: Endpoint = req.query.endpoint as Endpoint;

  validateEnvVariable(process.env.CMC_API_KEY, "CMC_API_KEY");
  validateEnvVariable(process.env.CMC_END_POINT, "CMC_END_POINT");

  try {
    if (!endpoint || !requireInfo) {
      throw new Error("Endpoint or RequireInfo is not specified");
    }
    console.log(
      "url",
      `${process.env.CMC_END_POINT!}/${endpoint}/${requireInfo}`
    );
    const response = await axios.get(
      `${process.env.CMC_END_POINT!}/${endpoint}/${requireInfo}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
      }
    );
    res.json(response.data.data);
  } catch (error) {
    console.error("Error fetching market data", error);
    res.status(500).send("Internal Server Error");
  }
};
