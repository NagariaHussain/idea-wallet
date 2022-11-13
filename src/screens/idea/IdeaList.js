import React from "react";
import styled from "styled-components";
import { IdeaListItem } from "../../components/idea/ListItem";
import { PageSubtitle } from "../../components/utils/typography";

const IdeaListContainer = styled.View``;

export const IdeaList = ({ ideas }) => {
  const listOfIdeas = ideas || [];
  return (
    <IdeaListContainer>
      {listOfIdeas.length > 0 ? (
        listOfIdeas.map((idea) => (
          <IdeaListItem key={idea.ideaId} ideaData={idea.data} />
        ))
      ) : (
        <PageSubtitle>No ideas found</PageSubtitle>
      )}
    </IdeaListContainer>
  );
};
