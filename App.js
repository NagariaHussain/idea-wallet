import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";
import { Navigation } from "./src/infra/navigation";

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
        <Navigation />
      </ThemeProvider>
    </>
  );
}
