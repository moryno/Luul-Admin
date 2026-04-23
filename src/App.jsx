import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
// import { Products } from "@/pages";
import { AppLayout } from "@/components/index";
import ProductForm from "./pages/products/components/ProductForm";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppLayout>
            <ProductForm />
          </AppLayout>
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
