import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const IdeaDetailScreen = ({ route }) => {
  const ideaId = route.params.ideaId;

  return (
    <View style={styles.container}>
      <Text>Idea: {ideaId}</Text>
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
