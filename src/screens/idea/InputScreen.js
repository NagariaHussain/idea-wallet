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

const FAB = styled(circularPrimaryButton)``;

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

export const IdeaInputScreen = () => {
  const theme = useTheme();

  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("🚀");
  const [ideaTitle, setIdeaTitle] = useState("");

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
        placeholder="Your Awesome Idea"
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
          onChange={(data) => console.log(data)}
          categories={categories}
        />
        <FAB onPress={Keyboard.dismiss}>
          <Icons.CheckIcon />
        </FAB>
      </Animated.View>
    </PageFrame>
  );
};
