import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
import { Dashboard } from "@/pages";
import { AppLayout } from "@/components/index";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
