import { memo } from "react";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/lib";
import { getAntTheme } from "@/helpers";

const AppThemeProvider = ({ children }) => {
  const theme = defaultTheme.theme;
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          token: getAntTheme(theme),
          components: {
            Layout: {
              lightSiderBg: theme.sideBar.sidebarBgColor,
              siderBg: theme.sideBar.sidebarBgColor,
            },
            Menu: {
              itemBg: theme.sideBar.sidebarBgColor,
              itemColor: theme.sideBar.sidebarTextColor,
              itemHoverColor: theme.sideBar.sidebarMenuHoverTextColor,
              itemHoverBg: theme.sideBar.sidebarMenuHoverBgColor,
              itemSelectedBg: theme.sideBar.sidebarMenuSelectedBgColor,
              itemSelectedColor: theme.sideBar.sidebarMenuSelectedTextColor,
              subMenuItemBg: theme.sideBar.sidebarBgColor,
              itemActiveBg: theme.sideBar.sidebarMenuSelectedBgColor,
            },
            Typography: {
              fontFamily: theme.font.body,
              titleMarginBottom: 0,
              titleMarginTop: 0,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default memo(AppThemeProvider);
