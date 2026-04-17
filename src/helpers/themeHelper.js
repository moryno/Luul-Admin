export const getAntTheme = (theme) => {
  return {
    colorPrimary: theme.palette.primary.main,
    colorTextDescription: theme.palette.text.secondary,
    colorLink: theme.palette.primary.main,
    colorText: theme.text.color,
    fontFamily: theme.font.family,
    colorBgContainer: theme.palette.background.default,
    colorBgElevated: theme.palette.background.default,
    colorTextPlaceholder: theme.palette.background.secondary,
    colorBorder: theme.palette.borderColor.default,
  };
};
