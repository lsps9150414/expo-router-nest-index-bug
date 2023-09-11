import { BLACK_80, HIGHLIGHT, WHITE } from "./colors";
import { shadowMediumStyle, shadowSmallStyle } from "./shadow";

const baseStyle = {
  backgroundColor: WHITE,
};

export const navBar = {
  ...baseStyle,
  ...shadowSmallStyle,
  borderBottomWidth: 0,
};

export const tabBarBottom = {
  ...baseStyle,
  ...shadowMediumStyle,
  minHeight: 48,
  borderTopWidth: 0,
};

export const navBarTitle = {
  color: BLACK_80,
};

export const navBarBackTitle = {
  color: HIGHLIGHT,
};

export const NAV_BAR_ICON_SIZE = 32;
