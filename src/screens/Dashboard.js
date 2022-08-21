import React from "react";
import styled from "styled-components";
import { IdeaListItem } from "../components/idea/ListItem";

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
    </PageFrame>
  );
};
