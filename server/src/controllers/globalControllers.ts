import { Request, Response } from "express";
import axios from "axios";
import { validateEnvVariable } from "../util/helpers";
import { Cache, Endpoint, ReqInfo } from "../type/marketTypes";

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

let marketCache: Cache = {};

const fetchCoinsWithSparkLineFromGekco = async ({
  currency,
}: {
  currency: string;
}) => {
  try {
    let config = {
      url: `${process.env.GECKO_BASE_URL}/markets?vs_currency=krw&order=market_cap_desc&per_page=30&page=1&sparkline=true`,
      headers: {
        x_cg_pro_api_key: process.env.GECKO_API_KEY,
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching coins with sparkline data.`, error);
    throw new Error("Internal Server Error");
  }
};

export const getCoinsWithSparkLine = async (req: Request, res: Response) => {
  const currency = (req.query.currency as string) || "usd";
  try {
    if (
      !marketCache[currency] ||
      Date.now() - marketCache[currency].time > 600000
    ) {
      console.info("Start fetching new data...");
      marketCache[currency] = {
        data: await fetchCoinsWithSparkLineFromGekco({
          currency: currency || "usd",
        }),
        time: Date.now(),
      };
    } else {
      console.info("Using cached market data");
    }
    res.json(marketCache[currency].data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

let coinCaches: Cache = {};

export const fetchCoinFromGekco = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.GECKO_BASE_URL!}/${id}?sparkline=true`,
      {
        headers: {
          x_cg_pro_api_key: process.env.GECKO_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching coin detail from Gekco. Error coin id: ${id}`
    );
    throw new Error("Internal Server Error");
  }
};

export const getCoinDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!coinCaches[id] || Date.now() - coinCaches[id].time > 600000) {
      console.info("Start fetching new data...");
      coinCaches[id] = { data: await fetchCoinFromGekco(id), time: Date.now() };
    } else {
      console.info("Using Cached coin data");
    }
    res.json(coinCaches[id].data);
  } catch (error) {
    console.error(`Error fetching coin detail.  Error coin id: ${id}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCoinOHLC = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `${process.env.GECKO_BASE_URL!}/${id}/ohlc?vs_currency=usd&days=30`,
      {
        headers: {
          x_cg_pro_api_key: process.env.GECKO_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching coin ohlc from Gekco. Error coin id: ${id}`);
    throw new Error("Internal Server Error");
  }
};
