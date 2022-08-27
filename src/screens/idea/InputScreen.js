import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Icons } from "../../components/icons";
import { CenteredRow } from "../../components/utils/Row";
import { CircularButton } from "../../components/Button";
import { Image, TextInput, View } from "react-native";
import { launchCameraAndGetImage } from "../../lib/camera";
import { EmojiPicker } from "../../components/utils/emojiPicker";

const ButtonRow = styled(CenteredRow)`
  justify-content: space-between;
  align-items: stretch;
`;

const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const PageFrame = styled.View`
  margin: 10px 24px;
`;

const IdeaInputBox = styled(TextInput)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.pageHeading};
  align-self: center;
  max-height: 200px;
`;

const EmojiButton = styled.View`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: 100%;
  background-color: white;
  justify-content: center;
`;

export const IdeaInputScreen = () => {
  const theme = useTheme();

  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [ideaTitle, setIdeaTitle] = useState("");

  const actions = [
    {
      icon: Icons.LinkIcon,
      onPress: () => console.log("link pressed."),
    },
    {
      icon: Icons.MicIcon,
      onPress: () => console.log("mic pressed."),
    },
    {
      icon: Icons.PencilIcon,
      onPress: () => console.log("pencil pressed."),
    },
    {
      icon: Icons.CameraIcon,
      onPress: async () => {
        const i = await launchCameraAndGetImage();
        console.log("Image picked: ", i);
        i && setImage(i.uri);
      },
    },
  ];

  return (
    <PageFrame>
      <ButtonRow>
        <EmojiPicker
          onPick={(emoji, idx) => {
            console.log("Emoji Picked: ", emoji);
            setSelectedEmoji(emoji);
          }}
        >
          <EmojiButton>
            <Emoji>{selectedEmoji}</Emoji>
          </EmojiButton>
        </EmojiPicker>

        {actions.map((item, idx) => {
          return (
            <CircularButton key={idx} onPress={item.onPress}>
              {item.icon}
            </CircularButton>
          );
        })}
      </ButtonRow>
      <View style={{ marginTop: 100 }}></View>

      <IdeaInputBox
        autoFocus
        multiline={true}
        selectionColor={theme.colors.typography.pageTitle}
        placeholder="Your Awesome Idea.."
        textAlign="center"
        value={ideaTitle}
        onChangeText={setIdeaTitle}
        textAlignVertical="center"
      />

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </PageFrame>
  );
};
