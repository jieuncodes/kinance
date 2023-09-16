import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Market from "../src/components/Market";
import * as CMCApi from "../src/services/apiService";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../src/services/apiService");

test("renders Spot Trading Markets", async () => {
  const mockData = [{ symbol: "ETHBTC" }, { symbol: "LTCBTC" }];

  (CMCApi.fetchMarket as jest.Mock).mockResolvedValue(mockData);

  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Market />
    </QueryClientProvider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => screen.getByText("Spot Trading Markets"));

  expect(screen.getByText("Spot Trading Markets")).toBeInTheDocument();
  expect(screen.getByText("ETHBTC")).toBeInTheDocument();
  expect(screen.getByText("LTCBTC")).toBeInTheDocument();
});
