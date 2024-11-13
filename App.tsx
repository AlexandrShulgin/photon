import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Providers } from "./src/store/provider";
import { useAppSelector } from "./src/store/hooks";
import MainNavigationStack from "./src/navigation/mainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import "./src/locale/i18n";
import { pixel } from "./src/utils/native-pixel";
import { statusBarBlue } from "./src/assets/styles/colors.style";

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <View>
          {Platform.OS == "ios" ? (
            <View style={[styles.appBar, { backgroundColor: statusBarBlue }]} />
          ) : (
            <StatusBar
              backgroundColor={statusBarBlue}
              barStyle={"light-content"}
            />
          )}
        </View>
        <MainNavigationStack />
      </NavigationContainer>
    </Providers>
  );
}
const APPBAR_HEIGHT = Platform.OS === "ios" ? pixel(44) : 0;
const styles = StyleSheet.create({
  appBar: {
    height: APPBAR_HEIGHT,
  },
});
