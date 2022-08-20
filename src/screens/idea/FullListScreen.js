import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const IdeaListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Idea List Screen</Text>
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
