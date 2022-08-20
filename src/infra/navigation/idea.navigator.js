import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";

const Stack = createNativeStackNavigator();

export const IdeaNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="IdeaDashboard" component={Dashboard} />
  </Stack.Navigator>
);
