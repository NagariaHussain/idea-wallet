import React, { useState } from "react";
import { gemoji } from "gemoji"; // GitHub Emojis!
import Popover from "react-native-popover-view";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CenteredRow } from "./Row";
import styled from "styled-components";

const EmojiOption = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const PickerContainer = styled(ScrollView)`
  padding: 10px;
  height: 250px;
  width: "100%";
`;

export const EmojiPicker = ({ children, onPick }) => {
  const [showPopover, setShowPopover] = useState(true);

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      popoverStyle={{ flex: 1 }}
      from={
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("showPopover: true");
              setShowPopover(true);
            }}
          >
            {children}
          </TouchableOpacity>
        </View>
      }
    >
      <PickerContainer>
        <CenteredRow style={{ flexWrap: "wrap" }}>
          {gemoji.slice(100, 200).map(({ emoji }, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                onPick(emoji, idx);
                setShowPopover(false);
              }}
            >
              <EmojiOption>{emoji}</EmojiOption>
            </TouchableOpacity>
          ))}
        </CenteredRow>
      </PickerContainer>
    </Popover>
  );
};
