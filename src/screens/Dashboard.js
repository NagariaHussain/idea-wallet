import React from "react";
import styled from "styled-components";
import { IdeaCategoryCard } from "../components/idea/CategoryCard";
import { IdeaListItem } from "../components/idea/ListItem";
import { CenteredRow } from "../components/utils/Row";

const PageFrame = styled.View`
  margin: 10px 24px;
`;

export const Dashboard = () => {
  return (
    <PageFrame>
      <IdeaListItem
        ideaData={{
          emoji: "🚀",
          title: "New Idea App",
          createdAt: "",
          id: "00767",
        }}
      />

      {/* Temp Spacer */}
      <PageFrame />
      <CenteredRow style={{ justifyContent: "space-between" }}>
        <IdeaCategoryCard
          categoryData={{
            emoji: "🍿",
            title: "Business",
            noOfIdeas: 3,
          }}
        />
        <IdeaCategoryCard
          categoryData={{
            emoji: "📖",
            title: "College",
            noOfIdeas: 8,
          }}
        />
        <IdeaCategoryCard
          categoryData={{
            emoji: "😆",
            title: "Fun",
            noOfIdeas: 12,
          }}
        />
      </CenteredRow>
    </PageFrame>
  );
};
