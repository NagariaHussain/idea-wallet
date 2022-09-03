import { colors } from "./colors";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { sizes } from "./sizes";

export const theme = {
  colors,
  fonts,
  sizes,
  fontWeights,
  fontSizes,
};

export const pageHeaderOptions = {
  headerTintColor: theme.colors.typography.pageTitle,
  headerTitleStyle: {
    fontFamily: theme.fonts.pageTitle,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.sm,
  },
  headerBackVisible: true,
};
