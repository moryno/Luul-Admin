import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
import { AppLayout } from "@/components/index";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppLayout />
        </BrowserRouter>
      </AppThemeProvider>
    </StoreProvider>
  );
}

export default App;
