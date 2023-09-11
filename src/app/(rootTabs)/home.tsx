import Screen from "components/Screen";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <Screen alignCenter>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", lineHeight: 40 }}>
          Steps to reproduce bug
        </Text>
        <Text>1. Go to the Account tab</Text>
        <Text>2. Come back to this Home tab</Text>
        <Text>
          {
            "3. Go to account tab again => BROKEN! \n results in the start page instead of account tab"
          }
        </Text>
      </View>

      <Link
        href="/(rootTabs)/account/"
        style={{ fontSize: 20, backgroundColor: "skyblue" }}
      >
        Go to Account tab
      </Link>
    </Screen>
  );
}
