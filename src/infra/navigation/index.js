import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../provider/auth";
import { AuthNavigator } from "./auth.navigator";

export const Navigation = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  return (
    <NavigationContainer>
      {user === true ? <AuthNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
