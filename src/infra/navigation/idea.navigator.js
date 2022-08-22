import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";
import { IdeaDetailScreen } from "../../screens/idea/DetailScreen";
import { IdeaCategoryScreen } from "../../screens/idea/CategoryScreen";

const Stack = createNativeStackNavigator();

export const IdeaNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="IdeaDashboard" component={Dashboard} />
    <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
    <Stack.Screen name="IdeaCategoryScreen" component={IdeaCategoryScreen} />
  </Stack.Navigator>
);
