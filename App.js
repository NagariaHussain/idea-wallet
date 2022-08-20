import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import {
  useFonts as useInterFont,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import {
  useFonts as usePoppinsFont,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const Title = styled.Text`
  padding: 16px;
  color: "#ff00ff";
`;

export default function App() {
  const [interLoaded] = useInterFont({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [poppinsLoaded] = usePoppinsFont({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!interLoaded || !poppinsLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <Title>Hello</Title>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
