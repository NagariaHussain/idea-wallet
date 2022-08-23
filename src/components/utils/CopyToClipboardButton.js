import React from "react";
import { CopyIcon } from "../icons/CopyIcon";
import { Pressable } from "react-native";
import styled from "styled-components";
import { CardContainer } from "./Card";
import * as Clipboard from "expo-clipboard";
import { showMessage } from "react-native-flash-message";

const ClickToCopyButtonContainer = styled(CardContainer)`
  padding: 14px;
`;

async function copyToClipboard(textContent) {
  await Clipboard.setStringAsync(textContent);
  showMessage({ message: "Copied!", floating: true }); // Show flash message
}

export const CopyToClipboardButton = ({ textContent }) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => copyToClipboard(textContent)}
    >
      <ClickToCopyButtonContainer>
        <CopyIcon />
      </ClickToCopyButtonContainer>
    </Pressable>
  );
};
