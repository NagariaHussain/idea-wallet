import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon.</Text>
      <Text>Send Feedback to hussain@frappe.io</Text>
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
