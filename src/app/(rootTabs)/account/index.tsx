import Screen from "components/Screen";
import { Link } from "expo-router";
import React from "react";

const Account = () => {
  return (
    <Screen alignCenter>
      <Link
        href="/(rootTabs)/home"
        style={{ fontSize: 20, backgroundColor: "skyblue" }}
      >
        Go to Home tab
      </Link>
      <Link
        href="/account/settings"
        style={{ fontSize: 20, backgroundColor: "skyblue" }}
      >
        Go to Settings
      </Link>
    </Screen>
  );
};

export default Account;
