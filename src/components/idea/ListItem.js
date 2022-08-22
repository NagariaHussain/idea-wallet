import React from "react";
import { Pressable, View } from "react-native";
import RightArrow from "../icons/RightArrow";
import { Row, CenteredRow } from "../utils/Row";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { CardTitle } from "../utils/CardTitle";

const ItemContainer = styled.View`
  width: 100%;
  padding: 18px 14px;
  background-color: white;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.xs};
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const CreatedText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.cardSubtitle};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.typography.cardCaption};
`;

export const IdeaListItem = ({ ideaData }) => {
  const navigation = useNavigation();
  const { emoji, title, createdAt, id: ideaId } = ideaData;
  return (
    <Pressable onPress={() => navigation.push("IdeaDetail", { ideaId })}>
      <ItemContainer>
        <Row>
          <Emoji>{emoji}</Emoji>
          <View style={{ marginLeft: 10 }}></View>
          <CardTitle>{title}</CardTitle>
        </Row>

        <CenteredRow>
          <CreatedText createdAt={createdAt}>a minute ago</CreatedText>
          <View style={{ marginLeft: 14 }}></View>
          <RightArrow />
        </CenteredRow>
      </ItemContainer>
    </Pressable>
  );
};
