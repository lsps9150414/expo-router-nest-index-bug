import * as React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import {
  KeyboardAwareProps,
  KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view";
import { GREY_LIGHT2 } from "styles/colors";
import { SPACING_3X } from "styles/layout";

export const SCREEN_PADDING = SPACING_3X;
export const BACKGROUND_COLOR = GREY_LIGHT2;

const styles = StyleSheet.create({
  footerAbsolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  container: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  bodyContainer: {
    flexGrow: 1,
    flexShrink: 1,
    zIndex: 0,
  },
  bodyScrollContainer: {
    flexGrow: 1, // NOTE: Only stretch to full height when content is shorter then container.
  },
  padding: {
    padding: SCREEN_PADDING,
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
});

interface LayoutProps {
  padding?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
}

interface EdgeComponentProps extends LayoutProps {
  positionAbsolute?: boolean;
  style?: StyleProp<ViewStyle>;
  viewProps?: ViewProps;
}

export interface ScreenProps extends ViewProps, ScrollViewProps, LayoutProps {
  backgroundColor?: string;
  loading?: boolean;
  scroll?: boolean;
  useKeyboardAwareScrollView?: boolean;
  keyboardAwareScrollViewProps?: Partial<KeyboardAwareProps>;
  hideSafeAreaTop?: boolean;
  hideSafeAreaBottom?: boolean;
  header?: React.ReactNode;
  headerProps?: EdgeComponentProps;
  footer?: React.ReactNode;
  footerProps?: EdgeComponentProps;
}

const DEFAULT_PROPS: Partial<ScreenProps> = {
  headerProps: {
    positionAbsolute: false,
    alignCenter: false,
    justifyCenter: false,
  },
  footerProps: {
    positionAbsolute: false,
    alignCenter: false,
    justifyCenter: false,
  },
};

// FIXME: justifyCenter must be used with scroll even with useKeyboardAwareScrollView is set.
export default function Screen({
  children,
  backgroundColor = BACKGROUND_COLOR,
  loading,
  scroll,
  useKeyboardAwareScrollView,
  keyboardAwareScrollViewProps,
  hideSafeAreaTop,
  hideSafeAreaBottom,
  header,
  headerProps,
  footer,
  footerProps,
  padding = true,
  alignCenter,
  justifyCenter,
  style,
  contentContainerStyle,
  onLayout,
  ...otherProps
}: ScreenProps): React.ReactElement {
  const mergedHeaderProps = { ...DEFAULT_PROPS.headerProps, ...headerProps };
  const mergedFooterProps = { ...DEFAULT_PROPS.footerProps, ...footerProps };

  const bodyContainerStyles = [
    alignCenter && styles.alignCenter,
    justifyCenter && styles.justifyCenter,
    padding && styles.padding,
    contentContainerStyle,
  ];
  const viewStyleProps = {
    style: [styles.bodyContainer, ...bodyContainerStyles, style],
  };
  const scrollViewStyleProps = {
    style,
    contentContainerStyle: [styles.bodyScrollContainer, ...bodyContainerStyles],
  };
  const bodyStyleProps = scroll ? scrollViewStyleProps : viewStyleProps;

  /* ========== BODY COMPONENT ========== */
  let BodyComponent:
    | typeof View
    | typeof ScrollView
    | typeof KeyboardAwareScrollView = View;
  if (scroll) {
    BodyComponent = ScrollView;
  }
  if (useKeyboardAwareScrollView) {
    BodyComponent = KeyboardAwareScrollView;
  }

  const appliedKeyboardAwareScrollViewProps = {
    enableOnAndroid: false,
    ...keyboardAwareScrollViewProps,
  };

  return (
    <View style={[styles.container, { backgroundColor }]} onLayout={onLayout}>
      {!!header && (
        <View
          pointerEvents="box-none"
          {...mergedHeaderProps.viewProps}
          style={[
            mergedHeaderProps.alignCenter && styles.alignCenter,
            mergedHeaderProps.justifyCenter && styles.justifyCenter,
            mergedHeaderProps.positionAbsolute && styles.headerAbsolute,
            mergedHeaderProps.style,
          ]}
        >
          {/* NOTE: Padding safe area for header, even when absolute positioned. */}
          {!hideSafeAreaTop && <SafeAreaView />}
          {header}
        </View>
      )}

      {/* NOTE: Padding top safe area for body, no effect when header is relative positioned and already padding safe area. */}
      {!hideSafeAreaTop && <SafeAreaView />}

      <BodyComponent
        {...bodyStyleProps}
        {...appliedKeyboardAwareScrollViewProps}
        {...otherProps}
      >
        {loading ? <ActivityIndicator /> : children}
      </BodyComponent>

      {/* NOTE: Padding bottom safe area for body, not effect when footer is relative positioned and already padding safe area. */}
      {!hideSafeAreaBottom && <SafeAreaView />}

      {!!footer && (
        <View
          pointerEvents="box-none"
          {...mergedFooterProps.viewProps}
          style={[
            mergedFooterProps.alignCenter && styles.alignCenter,
            mergedFooterProps.justifyCenter && styles.justifyCenter,
            mergedFooterProps.positionAbsolute && styles.footerAbsolute,
            mergedFooterProps.style,
          ]}
        >
          {footer}
          {/* NOTE: Padding safe area for footer, even when absolute positioned. */}
          {!hideSafeAreaBottom && <SafeAreaView />}
        </View>
      )}
    </View>
  );
}
