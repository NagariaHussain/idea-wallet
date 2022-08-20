import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";
import { Button } from "./src/components/Button";

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

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.pageHeading};
  font-size: ${(props) => props.theme.fontSizes.title};
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
    <>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Button>View All</Button>
          <Button type="secondary">View All</Button>
          <Button type="danger">Delete</Button>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
