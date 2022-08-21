import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../screens/SettingsScreen";
import { IdeaInputScreen } from "../../screens/idea/InputScreen";
import { IdeaNavigator } from "./idea.navigator";
import { BottomNavigationBar } from "../../components/BottomNavigationBar";
import { HomeIcon } from "../../components/icons/HomeIcon";
import { SettingsIcon } from "../../components/icons/SettingsIcon";
import styled from "styled-components";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ColumnView = styled.View`
  flex-direction: column;
`;

const CircularIndicator = styled.View`
  height: 4px;
  width: 4px;
  background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
  align-self: center;
  border-radius: 100%;
`;

function getTabIconComponent(isFocused, routeName) {
  return (
    <ColumnView>
      {routeName == "Settings" ? <SettingsIcon /> : <HomeIcon />}
      <View style={{ marginBottom: 6 }}></View>
      <CircularIndicator isActive={isFocused} />
    </ColumnView>
  );
}

const HomeTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomNavigationBar {...props} />}>
    <Tab.Screen
      name="IdeaNavigator"
      options={{
        headerShown: false,
        title: "Home",
        tabBarIcon: getTabIconComponent,
      }}
      component={IdeaNavigator}
    />
    <Tab.Screen
      name="Settings"
      options={{
        headerShown: false,
        title: "Settings",
        tabBarIcon: getTabIconComponent,
      }}
      component={SettingsScreen}
    />
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
