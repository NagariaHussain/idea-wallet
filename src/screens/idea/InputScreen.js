import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Icons } from "../../components/icons";
import { CenteredRow } from "../../components/utils/Row";
import { CircularButton, circularPrimaryButton } from "../../components/Button";
import { TextInput, View, Keyboard } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { launchCameraAndGetImage } from "../../lib/camera";
import { EmojiPicker } from "../../components/utils/emojiPicker";
import { CategorySelectMenu } from "../../components/idea/CategorySelect";
import { createIdea } from "../../lib/storage";

const categories = [
  {
    title: "Fun",
    emoji: "😆",
    id: 483,
  },
  {
    title: "College",
    emoji: "📖",
    id: 467,
  },
  {
    title: "Business",
    emoji: "🍿",
    id: 764,
  },
];

const SaveIdeaButton = styled(circularPrimaryButton)``;

const ButtonRow = styled(CenteredRow)`
  justify-content: space-between;
  align-items: stretch;
`;

const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
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

const EmojiButton = styled.View`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: 100%;
  background-color: white;
  justify-content: center;
`;

const CircularBadgeContainer = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary.main};
  height: 22px;
  width: 22px;
  border-radius: 100%;
  right: -4.5px;
  top: -5px;
  justify-content: center;
  align-items: center;
`;

const CircularBadgeText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.cardTitle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CircularBadge = ({ children }) => (
  <CircularBadgeContainer>
    <CircularBadgeText>{children}</CircularBadgeText>
  </CircularBadgeContainer>
);

export const IdeaInputScreen = ({ navigation }) => {
  const theme = useTheme();
  const [image, setImage] = useState(null);

  // New Idea Data
  const [ideaTitle, setIdeaTitle] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Animated Floating Action Button
  const FABBottomPosition = useSharedValue(20);
  const FABAnimatedStyles = useAnimatedStyle(() => {
    return {
      bottom: FABBottomPosition.value,
      position: "absolute",
      right: 0,
      left: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    };
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      FABBottomPosition.value = withTiming(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      FABBottomPosition.value = withSpring(20, {
        restDisplacementThreshold: 0.001,
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const actions = [
    {
      icon: Icons.LinkIcon,
      onPress: () => console.log("link pressed."),
    },
    {
      icon: Icons.MicIcon,
      onPress: () => Keyboard.dismiss(),
    },
    {
      icon: Icons.PencilIcon,
      onPress: () => console.log("pencil pressed."),
    },
    {
      icon: Icons.CameraIcon,
      badgeText: 1,
      onPress: async () => {
        const i = await launchCameraAndGetImage();
        console.log("Image picked: ", i);
        i && setImage(i.uri);
      },
    },
  ];

  async function handleSaveNewIdea(title, emoji, category) {
    if (!title) {
      console.log("title is required!");
      return;
    }

    await createIdea({
      title,
      emoji,
      category,
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

      <Animated.View style={FABAnimatedStyles}>
        <CategorySelectMenu
          onChange={(category) => setSelectedCategory(category.id)}
          categories={categories}
        />
        <SaveIdeaButton
          onPress={() =>
            handleSaveNewIdea(ideaTitle, selectedEmoji, selectedCategory)
          }
        >
          <Icons.CheckIcon />
        </SaveIdeaButton>
      </Animated.View>
    </PageFrame>
  );
};
