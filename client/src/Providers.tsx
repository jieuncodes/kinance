import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );
}

export default Providers;
