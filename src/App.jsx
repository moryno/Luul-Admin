import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
import { AppLayout } from "@/components/index";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppLayout />
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
