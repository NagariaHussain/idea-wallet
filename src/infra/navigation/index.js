import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../provider/auth";
import { AuthNavigator } from "./auth.navigator";
import { HomeNavigator } from "./home.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated === true ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
