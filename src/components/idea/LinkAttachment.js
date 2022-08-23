import React from "react";
import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import { CardContainer } from "../utils/Card";
import { CopyToClipboardButton } from "../utils/CopyToClipboardButton";
import { CenteredRow } from "../utils/Row";
import { TrashCanIcon } from "../icons/TrashCanIcon";
const LinkContainer = styled(CardContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 14px 7px 11px;
`;

const LinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.cardTitle};
  text-decoration-line: underline;
  letter-spacing: -0.5px;
`;

export const LinkAttachment = ({ linkData }) => {
  const { link } = linkData;
  return (
    <LinkContainer>
      <CenteredRow>
        <CopyToClipboardButton textContent={link} />
        <View style={{ marginLeft: 14 }}></View>
        <LinkText>{link}</LinkText>
      </CenteredRow>
      <Pressable>
        <TrashCanIcon />
      </Pressable>
    </LinkContainer>
  );
};
