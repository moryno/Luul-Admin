import { memo } from "react";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/lib";
import { getAntTheme } from "@/helpers";

const AppThemeProvider = ({ children }) => {
  const theme = defaultTheme.theme;
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={{ token: getAntTheme(theme) }}>
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default memo(AppThemeProvider);
