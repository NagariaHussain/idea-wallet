import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../provider/auth";
import { AuthNavigator } from "./auth.navigator";
import { HomeNavigator } from "./home.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <HomeNavigator />
      {/* No Longer Required to login at startup */}
      {/* {isAuthenticated === true ? <HomeNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};
