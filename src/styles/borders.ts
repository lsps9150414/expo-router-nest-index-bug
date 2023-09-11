import { StyleSheet, ViewStyle } from "react-native";

import { GREY_LIGHT2 } from "./colors";

const BASE = 4;

export const BORDER_RADIUS_BASE = BASE;
export const BORDER_RADIUS_2X = BASE * 2;
export const BORDER_RADIUS_4X = BASE * 4;

export const SECTION_BORDER_WIDTH = StyleSheet.hairlineWidth;
export const SECTION_BORDER_COLOR = GREY_LIGHT2;

export const SECTION_BORDER_TOP_STYLE: ViewStyle = {
  borderColor: SECTION_BORDER_COLOR,
  borderTopWidth: SECTION_BORDER_WIDTH,
};

export const SECTION_BORDER_BOTTOM_STYLE: ViewStyle = {
  borderColor: SECTION_BORDER_COLOR,
  borderBottomWidth: SECTION_BORDER_WIDTH,
};
