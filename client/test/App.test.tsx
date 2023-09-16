import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CryptoTable from "components/table/CryptoTable";
import "@testing-library/jest-dom/extend-expect";

test("Renders market data", async () => {
  render(<CryptoTable />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const mockData = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      slug: "bitcoin",
      num_market_pairs: 10469,
      date_added: "2010-07-13T00:00:00.000Z",
      tags: [
        "mineable",
        "pow",
        "sha-256",
        "store-of-value",
        "state-channel",
        "coinbase-ventures-portfolio",
        "three-arrows-capital-portfolio",
        "polychain-capital-portfolio",
        "binance-labs-portfolio",
        "blockchain-capital-portfolio",
        "boostvc-portfolio",
        "cms-holdings-portfolio",
        "dcg-portfolio",
        "dragonfly-capital-portfolio",
        "electric-capital-portfolio",
        "fabric-ventures-portfolio",
        "framework-ventures-portfolio",
        "galaxy-digital-portfolio",
        "huobi-capital-portfolio",
        "alameda-research-portfolio",
        "a16z-portfolio",
        "1confirmation-portfolio",
        "winklevoss-capital-portfolio",
        "usv-portfolio",
        "placeholder-ventures-portfolio",
        "pantera-capital-portfolio",
        "multicoin-capital-portfolio",
        "paradigm-portfolio",
        "bitcoin-ecosystem",
        "ftx-bankruptcy-estate",
      ],
      max_supply: 21000000,
      circulating_supply: 19487418,
      total_supply: 19487418,
      infinite_supply: false,
      platform: null,
      cmc_rank: 1,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: "2023-09-16T15:00:00.000Z",
      quote: {
        USD: {
          price: 26509.15115214454,
          volume_24h: 9488729446.634155,
          volume_change_24h: -19.0664,
          percent_change_1h: -0.20619491,
          percent_change_24h: 1.02303109,
          percent_change_7d: 2.56198087,
          percent_change_30d: -6.51378637,
          percent_change_60d: -11.41241422,
          percent_change_90d: -0.1322263,
          market_cap: 516594909327.0222,
          market_cap_dominance: 48.8584,
          fully_diluted_market_cap: 556692174195.04,
          tvl: null,
          last_updated: "2023-09-16T15:00:00.000Z",
        },
      },
    },
  ];

  jest.mock("services/apiService", () => ({
    fetchMarket: jest.fn().mockResolvedValue(mockData),
  }));

  const itemElement = await screen.findByText("Bitcoin");
  expect(itemElement).toBeInTheDocument();
});

test("allows sorting by columns", async () => {
  render(<CryptoTable />);

  const mockData = test("Renders market data", async () => {
    render(<CryptoTable />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    const mockData = [
      {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        slug: "bitcoin",
        num_market_pairs: 10469,
        date_added: "2010-07-13T00:00:00.000Z",
        tags: [
          "mineable",
          "pow",
          "sha-256",
          "store-of-value",
          "state-channel",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "galaxy-digital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio",
          "bitcoin-ecosystem",
          "ftx-bankruptcy-estate",
        ],
        max_supply: 21000000,
        circulating_supply: 19487418,
        total_supply: 19487418,
        infinite_supply: false,
        platform: null,
        cmc_rank: 1,
        self_reported_circulating_supply: null,
        self_reported_market_cap: null,
        tvl_ratio: null,
        last_updated: "2023-09-16T15:00:00.000Z",
        quote: {
          USD: {
            price: 26509.15115214454,
            volume_24h: 9488729446.634155,
            volume_change_24h: -19.0664,
            percent_change_1h: -0.20619491,
            percent_change_24h: 1.02303109,
            percent_change_7d: 2.56198087,
            percent_change_30d: -6.51378637,
            percent_change_60d: -11.41241422,
            percent_change_90d: -0.1322263,
            market_cap: 516594909327.0222,
            market_cap_dominance: 48.8584,
            fully_diluted_market_cap: 556692174195.04,
            tvl: null,
            last_updated: "2023-09-16T15:00:00.000Z",
          },
        },
      },
    ];

    jest.mock("services/apiService", () => ({
      fetchMarket: jest.fn().mockResolvedValue(mockData),
    }));

    const itemElement = await screen.findByText("Bitcoin");
    expect(itemElement).toBeInTheDocument();
  });

  jest.mock("services/apiService", () => ({
    fetchMarket: jest.fn().mockResolvedValue(mockData),
  }));
  await screen.findByText("Bitcoin");

  const nameHeader = screen.getByText("Name");
  fireEvent.click(nameHeader);

  const rows = screen.getAllByRole("row");
  expect(rows[1]).toHaveTextContent("Bitcoin");
  expect(rows[2]).toHaveTextContent("Ethereum");
  fireEvent.click(nameHeader);

  expect(rows[1]).toHaveTextContent("Ethereum");
  expect(rows[2]).toHaveTextContent("Bitcoin");
});
