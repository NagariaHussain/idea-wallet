import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { IdeaCategoryCard } from "../components/idea/CategoryCard";
import { CategorySelectMenu } from "../components/idea/CategorySelect";
import { LinkAttachment } from "../components/idea/LinkAttachment";
import { IdeaListItem } from "../components/idea/ListItem";
import { CenteredRow } from "../components/utils/Row";
import { IdeaContext } from "../provider/idea";

const categories = [
  {
    title: "Fun",
    emoji: "😆",
    id: 483,
  },
  {
    title: "College",
    emoji: "📖",
    id: 467,
  },
  {
    title: "Business",
    emoji: "🍿",
    id: 764,
  },
];

const PageFrame = styled.View`
  margin: 10px 24px;
`;

export const Dashboard = ({ route }) => {
  const { ideaData, isLoading, reloadIdeaData } = useContext(IdeaContext);

  useEffect(() => {
    if (route.params?.reloadData) {
      console.log("Reloading data");
      reloadIdeaData();
    }
  }, [route]);

  return (
    <PageFrame>
      {!isLoading &&
        ideaData.ideas &&
        Object.keys(ideaData.ideas).map((ideaId) => {
          let idea = ideaData.ideas[ideaId];
          return <IdeaListItem key={ideaId} ideaData={idea} />;
        })}

      {/* Temp Spacer */}
      <PageFrame />
      <CenteredRow style={{ justifyContent: "space-between" }}>
        <IdeaCategoryCard
          categoryData={{
            emoji: "🍿",
            title: "Business",
            noOfIdeas: 3,
            id: 764,
          }}
        />
        <IdeaCategoryCard
          categoryData={{
            emoji: "📖",
            title: "College",
            noOfIdeas: 8,
            id: 467,
          }}
        />
        <IdeaCategoryCard
          categoryData={{
            emoji: "😆",
            title: "Fun",
            noOfIdeas: 12,
            id: 483,
          }}
        />
      </CenteredRow>

      <PageFrame />

      <CategorySelectMenu
        onChange={(data) => console.log(data)}
        categories={categories}
      />

      <PageFrame />

      <LinkAttachment linkData={{ link: "https://google.com" }} />
    </PageFrame>
  );
};
