import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { IdeaCategoryCard } from "../components/idea/CategoryCard";
import { CategorySelectMenu } from "../components/idea/CategorySelect";
import { LinkAttachment } from "../components/idea/LinkAttachment";
import { IdeaListItem } from "../components/idea/ListItem";
import { CenteredRow } from "../components/utils/Row";
import { IdeaContext } from "../provider/idea";
import { compareDesc as compareDatesDesc } from "date-fns";
import { getProcessedCategoriesList } from "../components/idea/CategorySelect";

const PageFrame = styled.View`
  margin: 10px 24px;
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

export const Dashboard = ({ route }) => {
  const { ideaData, isLoading, reloadIdeaData } = useContext(IdeaContext);
  const categories = getProcessedCategoriesList(ideaData);

  useEffect(() => {
    if (route.params?.reloadData) {
      console.log("Reloading data");
      reloadIdeaData();
    }
  }, [route]);

  return (
    <PageFrame>
      <ScrollView>
        {!isLoading &&
          ideaData.ideas &&
          getRecentIdeas(ideaData.ideas, 5).map((idea) => {
            return <IdeaListItem key={idea.ideaId} ideaData={idea.data} />;
          })}

        {/* Temp Spacer */}
        <PageFrame />
        <CenteredRow style={{ justifyContent: "space-between" }}>
          {categories.map((category) => (
            <IdeaCategoryCard key={category.id} categoryData={category} />
          ))}
        </CenteredRow>

        <PageFrame />

        <CategorySelectMenu onChange={(data) => console.log(data)} />

        <PageFrame />

        <LinkAttachment linkData={{ link: "https://google.com" }} />
      </ScrollView>
    </PageFrame>
  );
};
