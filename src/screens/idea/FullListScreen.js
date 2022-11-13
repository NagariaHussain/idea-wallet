import React, { useContext } from "react";
import { SectionList } from "react-native";
import styled from "styled-components";
import { IdeaListItem } from "../../components/idea/ListItem";
import { getProcessedCategoriesList } from "../../components/idea/CategorySelect";
import { CategorySectionHeader } from "../../components/idea/CategorySectionHeader";
import { Button } from "../../components/Button";
import { IdeaContext } from "../../provider/idea";
import { PageFrame } from "../../components/utils/PageFrame";

const CategorySectionDivider = styled.View`
  margin-bottom: 40px;
`;

const PageHeaderContainer = styled.View`
  margin-bottom: 30px;
`;

export const AllIdeasListScreen = ({ navigation }) => {
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
      <PageHeaderContainer>
        <Button onPress={() => navigation.push("NewCategory")}>
          Create New Category
        </Button>
      </PageHeaderContainer>
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
