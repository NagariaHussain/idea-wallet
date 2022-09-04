import React from "react";
import { Pressable, View } from "react-native";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import { Row, CenteredRow } from "../utils/Row";
import { RightArrowIcon } from "../icons/RightArrow";
import { CardSubtitle, CardTitle, CardContainer } from "../utils/Card";

const MAX_TITLE_SHOW_LENGTH = 10;

const ItemContainer = styled(CardContainer)`
  padding: 18px 14px;
  margin-bottom: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const Emoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const RightContent = styled(CenteredRow)`
  flex: 1;
  justify-content: flex-end;
`;

const getFormatedDateDistanceText = (date) => {
  if (!date) {
    return "";
  }

  try {
    const parsedCreatedAt = new Date(date);
    const formatedDistance = formatDistanceToNow(parsedCreatedAt, {
      addSuffix: true,
    });

    // To make it short
    if (formatedDistance === "less than a minute ago") {
      return "just now";
    }

    return formatedDistance;
  } catch (e) {
    console.log(e);
    return "";
  }
};

export const IdeaListItem = ({ ideaData }) => {
  const navigation = useNavigation();
  const { emoji, title, createdAt, id: ideaId } = ideaData;

  // Truncate the title so it fits in the idea list item card
  const truncatedTitle =
    title.slice(0, MAX_TITLE_SHOW_LENGTH) +
    (title.length > MAX_TITLE_SHOW_LENGTH ? "..." : "");

  return (
    <Pressable onPress={() => navigation.push("IdeaDetail", { ideaId })}>
      <ItemContainer>
        <Row>
          <Emoji>{emoji}</Emoji>
          <View style={{ marginLeft: 8 }}></View>
          <CardTitle numberOfLines={1}>{truncatedTitle}</CardTitle>
        </Row>

        <RightContent>
          <CardSubtitle>{getFormatedDateDistanceText(createdAt)}</CardSubtitle>
          <View style={{ marginLeft: 8 }}></View>
          <RightArrowIcon />
        </RightContent>
      </ItemContainer>
    </Pressable>
  );
};
