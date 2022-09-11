import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginWithNotionButton } from "../components/auth/LoginWithNotionButton";

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <LoginWithNotionButton />
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
