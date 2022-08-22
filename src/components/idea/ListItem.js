import React from "react";
import { Pressable, View } from "react-native";
import RightArrow from "../icons/RightArrow";
import { Row, CenteredRow } from "../utils/Row";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { CardSubtitle, CardTitle, CardContainer } from "../utils/Card";

const ItemContainer = styled(CardContainer)`
  width: 100%;
  padding: 18px 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md};
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
          <CardSubtitle createdAt={createdAt}>a minute ago</CardSubtitle>
          <View style={{ marginLeft: 14 }}></View>
          <RightArrow />
        </CenteredRow>
      </ItemContainer>
    </Pressable>
  );
};
