import React from "react";
import styled from "styled-components";
import { Icons } from "../../components/icons";
import { CenteredRow } from "../../components/utils/Row";
import { CircularButton } from "../../components/Button";

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

const ButtonEmoji = () => <Emoji>🚀</Emoji>;

const actions = [
  {
    icon: ButtonEmoji,
    onPress: () => console.log("emoji picker pressed."),
  },
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
    onPress: () => console.log("camera pressed."),
  },
];

export const IdeaInputScreen = () => {
  return (
    <PageFrame>
      <ButtonRow>
        {actions.map((item, idx) => {
          return (
            <CircularButton key={idx} onPress={item.onPress}>
              {item.icon}
            </CircularButton>
          );
        })}
      </ButtonRow>
    </PageFrame>
  );
};
