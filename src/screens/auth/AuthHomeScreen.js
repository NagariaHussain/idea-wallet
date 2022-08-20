import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export const AuthHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        type="secondary"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Login
      </Button>
      <Button
        type="secondary"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
