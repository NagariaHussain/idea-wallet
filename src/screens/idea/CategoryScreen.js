import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const IdeaCategoryScreen = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Category: {categoryId}</Text>
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
