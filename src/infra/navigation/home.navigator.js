import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../screens/SettingsScreen";
import { IdeaInputScreen } from "../../screens/idea/InputScreen";
import { IdeaNavigator } from "./idea.navigator";
import { BottomNavigationBar } from "../../components/BottomNavigationBar";
import { HomeIcon } from "../../components/icons/HomeIcon";
import { SettingsIcon } from "../../components/icons/SettingsIcon";
import styled, { useTheme } from "styled-components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const HomeTabNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("IdeaInput");
  }, []);

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
  const theme = useTheme();

  return (
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
            headerTintColor: theme.colors.typography.pageTitle,
            headerTitleStyle: {
              fontFamily: theme.fonts.pageTitle,
              fontWeight: theme.fontWeights.bold,
              fontSize: theme.fontSizes.sm,
            },
            headerBackVisible: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
