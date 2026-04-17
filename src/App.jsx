import { AppThemeProvider } from "@/context";
import { GlobalStyles } from "@/config";
import { Dashboard } from "@/pages";
import { AppLayout } from "@/components/index";

function App() {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyles />
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </AppThemeProvider>
    </>
  );
}

export default App;
