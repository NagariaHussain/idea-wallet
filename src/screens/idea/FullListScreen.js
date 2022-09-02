import React, { useContext } from "react";
import { View, SectionList } from "react-native";
import styled from "styled-components";
import { getProcessedCategoriesList } from "../../components/idea/CategorySelect";
import { IdeaListItem } from "../../components/idea/ListItem";
import { CardSubtitle } from "../../components/utils/Card";
import { CenteredRow } from "../../components/utils/Row";
import { IdeaContext } from "../../provider/idea";

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

const CategoryHeaderEmoji = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const CategoryHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
`;

const CategoryHeaderContainer = styled(CenteredRow)`
  justify-content: space-between;
  align-content: center;
  margin-bottom: 18px;
`;

const CategorySectionHeader = ({ section: { title, emoji, noOfIdeas } }) => {
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
