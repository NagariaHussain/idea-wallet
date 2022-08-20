import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../screens/SettingsScreen";
import { IdeaInputScreen } from "../../screens/idea/InputScreen";
import { IdeaNavigator } from "./idea.navigator";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="IdeaNavigator"
      options={{ headerShown: false, title: "Home" }}
      component={IdeaNavigator}
    />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeTabNavigator"
      options={{ headerShown: false }}
      component={HomeTabNavigator}
    />
    <Stack.Screen name="IdeaInput" component={IdeaInputScreen} />
  </Stack.Navigator>
);
