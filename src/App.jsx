import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
import { AppLayout } from "@/components/index";
import StoreProvider from "./store/StoreProvider";
import { QueryProvider } from "./lib";

function App() {
  return (
    <AppThemeProvider>
      <StoreProvider>
        <QueryProvider>
          <BrowserRouter>
            <GlobalStyles />
            <AppLayout />
          </BrowserRouter>
        </QueryProvider>
      </StoreProvider>
    </AppThemeProvider>
  );
}

export default App;
