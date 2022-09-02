import React, { useContext } from "react";
import { SectionList } from "react-native";
import styled from "styled-components";
import { IdeaListItem } from "../../components/idea/ListItem";
import { getProcessedCategoriesList } from "../../components/idea/CategorySelect";
import { CategorySectionHeader } from "../../components/idea/CategorySectionHeader";

import { IdeaContext } from "../../provider/idea";

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

const CategorySectionDivider = styled.View`
  margin-bottom: 52px;
`;

export const AllIdeasListScreen = () => {
  const { ideaData, reloadIdeaData, isLoading } = useContext(IdeaContext);
  const data = getProcessedCategoriesList(ideaData);
  const sections = data
    .filter((category) => category.noOfIdeas > 0)
    .map((category) => ({
      data: category.ideas,
      ...category,
    }));

  return (
    <PageFrame>
      <SectionList
        sections={sections}
        renderItem={({ item }) => <IdeaListItem ideaData={item} />}
        renderSectionHeader={CategorySectionHeader}
        onRefresh={reloadIdeaData}
        refreshing={isLoading}
        renderSectionFooter={() => <CategorySectionDivider />}
      />
    </PageFrame>
  );
};
