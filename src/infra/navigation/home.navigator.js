import React from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styled from "styled-components";
import { pageHeaderOptions } from "../theme";
import { Icons } from "../../components/icons";
import { IdeaNavigator } from "./idea.navigator";
import { IdeaContextProvider } from "../../provider/idea";
import { SettingsScreen } from "../../screens/SettingsScreen";
import { IdeaInputScreen } from "../../screens/idea/InputScreen";
import { NewCategoryScreen } from "../../screens/idea/NewCategoryScreen";
import { BottomNavigationBar } from "../../components/BottomNavigationBar";
import { LinkAttachmentScreen } from "../../screens/idea/LinkAttachmentScreen";
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
      {routeName == "Settings" ? <Icons.SettingsIcon /> : <Icons.HomeIcon />}
      <View style={{ marginBottom: 6 }}></View>
      <CircularIndicator isActive={isFocused} />
    </ColumnView>
  );
}

const HomeTabNavigator = () => {
  return (
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
};

export const HomeNavigator = () => {
  return (
    <IdeaContextProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="HomeTabNavigator"
            options={{ headerShown: false }}
            component={HomeTabNavigator}
          />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="IdeaInput"
            component={IdeaInputScreen}
            options={{
              title: "Your Awesome Idea",
              ...pageHeaderOptions,
            }}
          />

          <Stack.Screen
            name="NewCategory"
            component={NewCategoryScreen}
            options={{
              title: "Create New Category",
              ...pageHeaderOptions,
            }}
          />

          <Stack.Screen
            name="LinkAttachment"
            component={LinkAttachmentScreen}
            options={{
              title: "Attach Link",
              ...pageHeaderOptions,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </IdeaContextProvider>
  );
};
