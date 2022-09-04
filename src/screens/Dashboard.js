import { ScrollView, View, Text } from "react-native";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { compareDesc as compareDatesDesc } from "date-fns";

import { IdeaContext } from "../provider/idea";
import { CenteredRow } from "../components/utils/Row";
import { IdeaListItem } from "../components/idea/ListItem";
import { IdeaCategoryCard } from "../components/idea/CategoryCard";
import { getProcessedCategoriesList } from "../components/idea/CategorySelect";
import { Button } from "../components/Button";

const PageFrame = styled.View`
  margin: 10px 24px;
`;

const PageTitle = styled.Text`
  color: ${({ theme }) => theme.colors.typography.pageTitle};
  font-family: ${({ theme }) => theme.fonts.pageHeading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  text-align: left;
`;

const PageSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.typography.pageSubtitle};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: left;
`;

const SecondaryHeading = styled.Text`
  color: ${({ theme }) => theme.colors.typography.heading};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const DashboardScrollView = styled(ScrollView)`
  padding: 10px 24px;
`;

const getRecentIdeas = (ideasObj, numOfIdeas = 3) => {
  const ideaList = Object.keys(ideasObj).map((ideaId) => ({
    data: {
      ...ideasObj[ideaId],
      createdAt: new Date(ideasObj[ideaId].createdAt),
    },
    ideaId,
  }));

  ideaList.sort((a, b) => compareDatesDesc(a.data.createdAt, b.data.createdAt));

  return ideaList.slice(0, numOfIdeas);
};

export const Dashboard = ({ route, navigation }) => {
  const { ideaData, isLoading, reloadIdeaData } = useContext(IdeaContext);
  const categories = getProcessedCategoriesList(ideaData);

  useEffect(() => {
    if (route.params?.reloadData) {
      console.log("Reloading data");
      reloadIdeaData();
    }
  }, [route]);

  return (
    <DashboardScrollView>
      <PageTitle>Dashboard</PageTitle>
      <PageSubtitle>Awesome ideas, by you.</PageSubtitle>

      <View style={{ marginTop: 30 }}></View>
      <SecondaryHeading>Recent Ideas</SecondaryHeading>
      <View style={{ marginTop: 8 }}></View>

      {!isLoading ? (
        getRecentIdeas(ideaData?.ideas || [], 3).map((idea) => {
          return <IdeaListItem key={idea.ideaId} ideaData={idea.data} />;
        })
      ) : (
        <Text>Loading...</Text>
      )}

      <PageFrame />

      <Button onPress={() => navigation.push("IdeaFullList")}>View All</Button>

      <View style={{ marginTop: 30 }}></View>
      <SecondaryHeading>Categories</SecondaryHeading>
      <View style={{ marginTop: 8 }}></View>

      <ScrollView horizontal>
        <CenteredRow style={{ justifyContent: "space-between" }}>
          {categories.map((category) => (
            <IdeaCategoryCard key={category.id} categoryData={category} />
          ))}
        </CenteredRow>
      </ScrollView>
    </DashboardScrollView>
  );
};
