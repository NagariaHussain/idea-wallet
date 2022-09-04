import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, View } from "react-native";
import styled from "styled-components";
import { CardTitle, CardContainer, CardSubtitle } from "../utils/Card";

const CategoryCardContainer = styled(CardContainer)`
  padding: 10px 22px 22px 16px;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  margin-right: 6px;
  min-width: 110px;
  height: 100%;
`;

const CategoryEmoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: 32px;
`;

export const IdeaCategoryCard = ({ categoryData }) => {
  const { title, noOfIdeas, emoji } = categoryData;
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.push("IdeaCategoryScreen", { categoryData })}
    >
      <CategoryCardContainer>
        <View>
          <CardSubtitle>
            {noOfIdeas} {noOfIdeas === 1 ? "Idea" : "Ideas"}
          </CardSubtitle>
          <View style={{ marginTop: 10 }}></View>
          <CardTitle>{title}</CardTitle>
        </View>
        <CategoryEmoji>{emoji}</CategoryEmoji>
      </CategoryCardContainer>
    </Pressable>
  );
};
