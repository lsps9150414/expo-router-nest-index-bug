import { TextStyle } from "react-native";

import { BLACK_20, BLACK_40, BLACK_60, WHITE_80 } from "./colors";

export const getTextGlowSmallStyle = (
  textShadowColor = WHITE_80,
): TextStyle => ({
  textShadowColor,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 8,
});

export const textShadowSmallStyle = {
  textShadowColor: BLACK_20,
  textShadowOffset: { width: 0, height: 0.5 },
  textShadowRadius: 2,
};

export const textShadowMediumStyle = {
  textShadowColor: BLACK_40,
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 4,
};

export const textShadowLargeStyle = {
  textShadowColor: BLACK_60,
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 8,
};

export const shadowSmallStyle = {
  // NOTE: iOS
  shadowColor: BLACK_20,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  // NOTE: Android
  elevation: 2,
};

export const shadowMediumStyle = {
  // NOTE: iOS
  shadowColor: BLACK_40,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  // NOTE: Android
  elevation: 4,
};

export const shadowLargeStyle = {
  // NOTE: iOS
  shadowColor: BLACK_60,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  // NOTE: Android
  elevation: 8,
};
