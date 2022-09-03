import React, { useState, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { Icons } from "../../components/icons";
import { CenteredRow } from "../../components/utils/Row";
import { CircularButton, circularPrimaryButton } from "../../components/Button";
import { TextInput, View, Keyboard } from "react-native";
import Lottie from "lottie-react-native";

import { launchCameraAndGetImage } from "../../lib/camera";
import { EmojiPicker } from "../../components/utils/emojiPicker";
import { CategorySelectMenu } from "../../components/idea/CategorySelect";
import { createIdea } from "../../lib/storage";
import { CircularBadge } from "../../components/Badge";
import {
  playRecording,
  startAndGetRecording,
  stopAndGetRecording,
} from "../../lib/audio";
import { FloatingActions } from "../../components/idea/FloatingActions";

const SaveIdeaButton = styled(circularPrimaryButton)``;

const ButtonRow = styled(CenteredRow)`
  justify-content: space-between;
  align-items: stretch;
`;

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

const IdeaInputBox = styled(TextInput)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.pageHeading};
  align-self: center;
  max-height: 200px;
`;

export const IdeaInputScreen = ({ navigation }) => {
  const theme = useTheme();

  // Attachments
  const [images, setImages] = useState([]);
  const recordingAnimation = useRef(null);
  const [recordingInProgress, setRecordingInProgress] = useState(false);
  const [soundRecording, setSoundRecording] = useState(null);

  // New Idea Data
  const [ideaTitle, setIdeaTitle] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const actions = [
    {
      icon: Icons.LinkIcon,
      onPress: () => console.log("link pressed."),
    },
    {
      icon: Icons.PencilIcon,
      onPress: () => console.log("pencil pressed."),
    },
    {
      icon: Icons.CameraIcon,
      badgeText: images.length || "",
      onPress: async () => {
        const i = await launchCameraAndGetImage();
        console.log("Image picked: ", i);
        i && setImages((previousImages) => [...previousImages, i]);
      },
    },
  ];

  async function handleSaveNewIdea(
    title,
    emoji,
    category,
    attachedImages = [],
    attachedSoundRecording = {}
  ) {
    if (!title) {
      console.log("title is required!");
      return;
    }

    await createIdea({
      title,
      emoji,
      category,
      images: attachedImages,
      voiceNote: attachedSoundRecording
        ? { uri: attachedSoundRecording.getURI() }
        : null,
    });

    Keyboard.dismiss();
    navigation.navigate("IdeaDashboard", { reloadData: true });
  }

  return (
    <PageFrame>
      {/* TODO: Replace with spacer */}
      <View style={{ marginTop: 8 }}></View>

      <ButtonRow>
        <EmojiPicker
          selectedEmoji={selectedEmoji}
          onPick={(emoji, idx) => {
            console.log("Emoji Picked: ", emoji);
            setSelectedEmoji(emoji);
          }}
        />

        {actions.map((item, idx) => {
          return (
            <View key={idx}>
              <CircularButton onPress={item.onPress}>
                {item.icon}
              </CircularButton>
              {item.badgeText && (
                <CircularBadge>{item.badgeText}</CircularBadge>
              )}
            </View>
          );
        })}

        <CircularButton
          onPress={async () => {
            if (!recordingInProgress) {
              setRecordingInProgress(true);
              const recording = await startAndGetRecording();
              recordingAnimation.current?.play();
              setSoundRecording(recording);
            } else {
              const recordedSound = await stopAndGetRecording(soundRecording);
              setRecordingInProgress(false);
              // Play the recorded sound
              // TODO: Refactor to a separate control
              await playRecording(recordedSound);
            }
          }}
        >
          {recordingInProgress ? (
            <Lottie
              autoPlay
              ref={recordingAnimation}
              loop
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/icons/animated/sound-recording.json")}
            />
          ) : (
            <Icons.MicIcon />
          )}
        </CircularButton>
      </ButtonRow>

      {/* TODO: Replace with spacer */}
      <View style={{ marginTop: 100 }}></View>

      <IdeaInputBox
        autoFocus
        multiline={true}
        selectionColor={theme.colors.typography.pageTitle}
        placeholder=""
        textAlign="center"
        value={ideaTitle}
        onChangeText={setIdeaTitle}
        textAlignVertical="center"
      />

      {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
      <FloatingActions>
        <CategorySelectMenu
          onChange={(category) => {
            setSelectedCategory(category.id);
          }}
        />
        <SaveIdeaButton
          onPress={() =>
            handleSaveNewIdea(
              ideaTitle,
              selectedEmoji,
              selectedCategory,
              images,
              soundRecording
            )
          }
        >
          <Icons.CheckIcon />
        </SaveIdeaButton>
      </FloatingActions>
    </PageFrame>
  );
};
