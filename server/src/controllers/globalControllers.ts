import { Request, Response } from "express";
import axios from "axios";
import { validateEnvVariable } from "../util/helpers";
import { Endpoint, ReqInfo } from "../type/marketTypes";

export const getMarket = async (req: Request, res: Response): Promise<void> => {
  const requireInfo: ReqInfo = req.query.requireInfo as ReqInfo;
  const endpoint: Endpoint = req.query.endpoint as Endpoint;

  validateEnvVariable(process.env.CMC_API_KEY, "CMC_API_KEY");
  validateEnvVariable(process.env.CMC_MARKET_DATA_URL, "CMC_MARKET_DATA_URL");

  try {
    if (!endpoint || !requireInfo) {
      throw new Error("Endpoint or RequireInfo is not specified");
    }

    const response = await axios.get(
      `${process.env.CMC_MARKET_DATA_URL!}/${endpoint}/${requireInfo}`,
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
let cache = {
  data: null,
  time: Date.now(),
};

const fetchCoinsWithSparkLine = async () => {
  try {
    const response = await axios.get(
      `${process.env.GECKO_BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`,
      {
        headers: {
          x_cg_pro_api_key: process.env.GECKO_API_KEY,
        },
      }
    );
    console.log("asdfasdfasdf", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching coin sparkline.`);
    throw new Error("Internal Server Error");
  }
};
export const getCoinsWithSparkLine = async (req: Request, res: Response) => {
  try {
    if (Date.now() - cache.time > 600000 || !cache.data) {
      console.log("Fetching new data");
      cache.data = await fetchCoinsWithSparkLine();
      cache.time = Date.now();
    } else {
      console.log("Using cached data");
    }
    res.json(cache.data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const coinPage = async (req: Request, res: Response) => {
  const { id } = req.params;

  validateEnvVariable(process.env.CMC_API_KEY, "CMC_API_KEY");
  validateEnvVariable(process.env.GECKO_BASE_URL, "GECKO_BASE_URL");

  try {
    //TODO: Add parmas to get more data

    const response = await axios.get(
      `${process.env.GECKO_BASE_URL!}/${id}/market_chart?vs_currency=usd&days=1`
    );
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching coin data.  Error coin id: ${id}`, error);
    res.status(500).send("Internal Server Error");
  }
};

export const getCoinSparkLine = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `${process.env.GECKO_BASE_URL!}/${id}?sparkline=true`
    );
    res.json(response.data.market_data.sparkline_7d.price);
  } catch (error) {
    console.error(`Error fetching coin sparkline.  Error coin id: ${id}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
