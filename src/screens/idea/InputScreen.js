import React from "react";
import styled from "styled-components";
import { Icons } from "../../components/icons";
import { CenteredRow } from "../../components/utils/Row";
import { CircularButton } from "../../components/Button";

const ButtonRow = styled(CenteredRow)`
  justify-content: space-between;
  align-items: stretch;
`;

const ButtonEmoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const PageFrame = styled.View`
  margin: 10px 24px;
`;

export const IdeaInputScreen = () => {
  return (
    <PageFrame>
      <ButtonRow>
        <CircularButton>
          <ButtonEmoji>🚀</ButtonEmoji>
        </CircularButton>
        <CircularButton>
          <Icons.LinkIcon />
        </CircularButton>
        <CircularButton>
          <Icons.MicIcon />
        </CircularButton>
        <CircularButton>
          <Icons.PencilIcon />
        </CircularButton>
        <CircularButton>
          <Icons.CameraIcon />
        </CircularButton>
      </ButtonRow>
    </PageFrame>
  );
};
