import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";
import { Navigation } from "./src/infra/navigation";
import FlashMessage from "react-native-flash-message";

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

import { AuthProvider } from "./src/provider/auth";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

const AlertMessage = styled(FlashMessage)`
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: ${(props) => props.theme.sizes.borderRadius.sm};
  width: 50%;
  align-self: center;
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
        <AuthProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
            <Navigation />
          </SafeAreaView>
        </AuthProvider>
        <AlertMessage position="top" />
      </ThemeProvider>
    </>
  );
}
