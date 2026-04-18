export const getAntTheme = (theme) => {
  return {
    colorPrimary: theme.palette.primary.main,
    colorTextDescription: theme.palette.text.secondary,
    colorLink: theme.palette.primary.main,
    colorText: theme.palette.text.primary,
    fontFamily: theme.font.body,
    colorBgContainer: theme.palette.background.default,
    colorBgElevated: theme.palette.background.default,
    colorTextPlaceholder: theme.palette.text.secondary,
    colorBorder: theme.palette.borderColor.default,
  };
};
