import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../screens/Dashboard";
import { IdeaDetailScreen } from "../../screens/idea/DetailScreen";
import { IdeaCategoryScreen } from "../../screens/idea/CategoryScreen";
import { IdeaContextProvider } from "../../provider/idea";

const Stack = createNativeStackNavigator();

export const IdeaNavigator = () => (
  <IdeaContextProvider>
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="IdeaDashboard"
        component={Dashboard}
      />
      <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
      <Stack.Screen name="IdeaCategoryScreen" component={IdeaCategoryScreen} />
    </Stack.Navigator>
  </IdeaContextProvider>
);
