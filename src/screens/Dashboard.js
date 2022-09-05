import { ScrollView, Text } from "react-native";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { compareDesc as compareDatesDesc } from "date-fns";

import { IdeaContext } from "../provider/idea";
import { Button } from "../components/Button";
import {
  PageSubtitle,
  PageTitle,
  SecondaryHeading,
} from "../components/utils/typography";
import { IdeaList } from "./idea/IdeaList";
import { CategoryCardList } from "../components/idea/CategoryCardList";
import { getProcessedCategoriesList } from "../components/idea/CategorySelect";

const PageFrame = styled.View`
  margin: 10px 24px;
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

      <SecondaryHeading>Recent Ideas</SecondaryHeading>

      {!isLoading ? (
        <IdeaList ideas={getRecentIdeas(ideaData?.ideas || [], 3)} />
      ) : (
        <Text>Loading...</Text>
      )}

      <PageFrame />

      <Button onPress={() => navigation.push("IdeaFullList")}>View All</Button>

      <SecondaryHeading>Categories</SecondaryHeading>

      <CategoryCardList categories={categories} />
    </DashboardScrollView>
  );
};
