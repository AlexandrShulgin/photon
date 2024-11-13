import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/welcomeScreen/welcomeScreen";
import ChatScreen from "../screens/chatScreen/chatScreen";
import SettingsScreen from "../screens/settingsScreen/settingsScreen";

export type NavigationParamList = {
  WELCOMESCREEN: undefined;
  CHATSCREEN: undefined;
  SETTINGSSCREEN: undefined
};

const Stack = createStackNavigator<NavigationParamList>();

const MainNavigationStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="WELCOMESCREEN">
      <Stack.Screen
        name="WELCOMESCREEN"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CHATSCREEN"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SETTINGSSCREEN"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
