import React, { useState, useRef, useEffect } from "react";
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

export const IdeaInputScreen = ({ navigation, route }) => {
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
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Remove deleted links
    if (route.params?.deleted) {
      const deletedLinkAttachments = route.params?.deleted;
      setLinks((prevLinks) =>
        prevLinks.filter((l) => !deletedLinkAttachments.includes(l))
      );
    }

    // Add newly inserted link
    if (route.params?.link) {
      const link = route.params.link;

      // Handle duplicate links
      if (!links.includes(link)) {
        setLinks((prevLinks) => [...prevLinks, link]);
      }
    }
  }, [route.params?.link, route.params?.deleted]);

  const actions = [
    {
      icon: Icons.LinkIcon,
      badgeText: links.length || "",
      onPress: () =>
        navigation.push("LinkAttachment", { existingLinks: links }),
    },
    {
      icon: Icons.CameraIcon,
      badgeText: images.length || "",
      onPress: async () => {
        const i = await launchCameraAndGetImage();
        i && setImages((previousImages) => [...previousImages, i]);
      },
    },
  ];

  async function handleSaveNewIdea(
    title,
    emoji,
    category,
    attachedImages = [],
    attachedSoundRecording = {},
    links = []
  ) {
    if (!title) {
      console.log("title is required!");
      return;
    }

    if (recordingInProgress) {
      await stopAndGetRecording(soundRecording);
      setRecordingInProgress(false);
    }

    await createIdea({
      title,
      emoji,
      category,
      images: attachedImages,
      voiceNote: attachedSoundRecording
        ? { uri: attachedSoundRecording.getURI() }
        : null,
      links,
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
          onPick={(emoji) => {
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
              await stopAndGetRecording(soundRecording);
              setRecordingInProgress(false);
              // Play the recorded sound
              // TODO: Refactor to a separate control
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
        placeholder="Your Idea"
        textAlign="center"
        value={ideaTitle}
        onChangeText={setIdeaTitle}
        textAlignVertical="center"
      />

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
              soundRecording,
              links
            )
          }
        >
          <Icons.CheckIcon />
        </SaveIdeaButton>
      </FloatingActions>
    </PageFrame>
  );
};
