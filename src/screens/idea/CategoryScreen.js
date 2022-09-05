import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { IdeaListItem } from "../../components/idea/ListItem";
import { EmojiPageHeader } from "../../components/utils/EmojiPageHeader";
import {
  PageSubtitle,
  SecondaryHeading,
} from "../../components/utils/typography";

const CategoryDetailScrollView = styled(ScrollView)`
  padding: 10px 24px;
  flex: 1;
`;

export const IdeaCategoryScreen = ({ route }) => {
  const { categoryData: category } = route.params;

  if (!category.ideas) {
    category.ideas = [];
  }

  return (
    <CategoryDetailScrollView>
      <EmojiPageHeader emoji={category.emoji} title={category.title} />
      <SecondaryHeading>Ideas</SecondaryHeading>
      {category.ideas.length > 0 ? (
        category.ideas.map((idea) => (
          <IdeaListItem key={idea.id} ideaData={idea} />
        ))
      ) : (
        <PageSubtitle>No ideas yet</PageSubtitle>
      )}
    </CategoryDetailScrollView>
  );
};
