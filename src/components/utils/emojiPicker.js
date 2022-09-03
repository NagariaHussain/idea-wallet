import React, { useState } from "react";
import { gemoji } from "gemoji"; // GitHub Emojis!
import Popover from "react-native-popover-view";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { FlashList } from "@shopify/flash-list";

const EmojiOption = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const PickerContainer = styled(View)`
  padding: 15px 10px;
  height: 250px;
  width: 300px;
`;

export const EmojiButton = styled.View`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: 100%;
  background-color: white;
  justify-content: center;
`;

export const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const EmojiPicker = ({ children, onPick, selectedEmoji }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}
      popoverStyle={{
        flex: 1,
        borderRadius: 12,
        padding: 0,
        justifyContent: "center",
      }}
      from={
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("showPopover: true");
              setShowPopover(true);
            }}
          >
            <EmojiButton>
              <Emoji>{selectedEmoji}</Emoji>
            </EmojiButton>
          </TouchableOpacity>
        </View>
      }
    >
      <PickerContainer>
        <FlashList
          data={gemoji}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onPick(item.emoji);
                setShowPopover(false);
              }}
            >
              <EmojiOption accessibilityLabel={item.description}>
                {item.emoji}
              </EmojiOption>
            </TouchableOpacity>
          )}
          estimatedItemSize={22}
          numColumns={5}
        />
      </PickerContainer>
    </Popover>
  );
};

// Before Flash List
// <CenteredRow style={{ flexWrap: "wrap" }}>
// {gemoji.slice(100, 200).map(({ emoji }, idx) => (
// <TouchableOpacity
//   key={idx}
//   onPress={() => {
//     onPick(emoji, idx);
//     setShowPopover(false);
//   }}
// >
//   <EmojiOption>{emoji}</EmojiOption>
// </TouchableOpacity>
// ))}
// </CenteredRow>
