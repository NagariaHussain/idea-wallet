import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { CardSubtitle } from "../../components/utils/Card";
import { CenteredRow } from "../../components/utils/Row";
const CategoryHeaderEmoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const CategoryHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
`;

const CategoryHeaderContainer = styled(CenteredRow)`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  align-content: center;
  margin-bottom: 18px;
`;

export const CategorySectionHeader = ({
  section: { title, emoji, noOfIdeas },
}) => {
  return (
    <CategoryHeaderContainer>
      <CenteredRow>
        <CategoryHeaderEmoji>{emoji}</CategoryHeaderEmoji>
        <View style={{ marginLeft: 15 }}></View>
        <CategoryHeaderTitle>{title}</CategoryHeaderTitle>
      </CenteredRow>

      <CardSubtitle>
        {noOfIdeas} {noOfIdeas === 1 ? "Idea" : "Ideas"}
      </CardSubtitle>
    </CategoryHeaderContainer>
  );
};
