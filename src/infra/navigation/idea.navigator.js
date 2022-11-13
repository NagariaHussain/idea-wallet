import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";
import { IdeaDetailScreen } from "../../screens/idea/DetailScreen";
import { IdeaCategoryScreen } from "../../screens/idea/CategoryScreen";
import { AllIdeasListScreen } from "../../screens/idea/FullListScreen";
import { SearchResultsScreen } from "../../screens/search/ResultsScreen";


const Stack = createNativeStackNavigator();

export const IdeaNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="IdeaDashboard"
      component={Dashboard}
    />
    <Stack.Screen
      options={{ headerTitle: "Results" }}
      name="IdeaSearchResults"
      component={SearchResultsScreen}
    />
    <Stack.Screen
      options={{ headerTitle: "All Ideas" }}
      name="IdeaFullList"
      component={AllIdeasListScreen}
    />
    <Stack.Screen
      options={{ headerTitle: "Details" }}
      name="IdeaDetail"
      component={IdeaDetailScreen}
    />
    <Stack.Screen
      options={{ headerTitle: "Category Details" }}
      name="IdeaCategoryScreen"
      component={IdeaCategoryScreen}
    />
  </Stack.Navigator>
);
