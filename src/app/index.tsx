import Screen from "components/Screen";
import { Link, useRootNavigationState } from "expo-router";
import React from "react";

const SplashScreen = () => {
  // temp workaround: https://github.com/expo/router/issues/740#issuecomment-1626015285
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  // return <Redirect href="/home" />;
  return (
    <Screen alignCenter>
      <Link href="/home" style={{ fontSize: 20, backgroundColor: "skyblue" }}>
        Get Started
      </Link>
    </Screen>
  );
};

export default SplashScreen;
