import { AppThemeProvider } from "./context";
import { GlobalStyles } from "./config";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles />
    </AppThemeProvider>
  );
}

export default App;
