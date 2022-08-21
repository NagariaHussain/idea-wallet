import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";
import { IdeaDetailScreen } from "../../screens/idea/DetailScreen";

const Stack = createNativeStackNavigator();

export const IdeaNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="IdeaDashboard" component={Dashboard} />
    <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
  </Stack.Navigator>
);
