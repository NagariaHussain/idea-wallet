import styled from "styled-components";
import { ScrollView, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { SearchBox } from "../components/idea/SearchBox";
import { PageFrame } from "../components/utils/PageFrame";

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
  const [searchText, setSearchText] = useState("");
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

      <SearchBox
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => {
          if (searchText) {
            navigation.push("IdeaSearchResults", {
              query: searchText,
            });
          }
        }}
      />

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

      <Button onPress={() => navigation.push("NewCategory")}>
        New Category
      </Button>

      <View style={{ marginBottom: 100 }}></View>
    </DashboardScrollView>
  );
};
