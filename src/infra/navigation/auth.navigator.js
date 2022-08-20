import React from "react";

import { AuthHomeScreen } from "../../screens/auth/AuthHomeScreen";
import { LoginScreen } from "../../screens/auth/LoginScreen";
import { SignUpScreen } from "../../screens/auth/SignUpScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
    <Stack.Screen name="Signup" component={SignUpScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
