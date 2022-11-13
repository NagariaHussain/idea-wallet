import React from "react";
import Fuse from "fuse.js"; // For Search
import { useContext } from "react";
import { IdeaList } from "../idea/IdeaList";
import { IdeaContext } from "../../provider/idea";
import { PageFrame } from "../../components/utils/PageFrame";

const getIdeasArrayFromObject = (obj) => {
  return Object.keys(obj).map((key) => obj[key]);
};

const getProcessedSearchResults = (results) => {
  return results.map((r) => ({
    ideaId: r.item.id,
    data: r.item,
  }));
};

export const SearchResultsScreen = ({ route }) => {
  const { ideaData } = useContext(IdeaContext);
  const searchQuery = route.params.query;
  const ideas = getIdeasArrayFromObject(ideaData?.ideas || {});

  const fuse = new Fuse(ideas, {
    keys: ["title"],
  });

  const searchResults = fuse.search(searchQuery);
  const processedSearchResults = getProcessedSearchResults(searchResults);

  return (
    <PageFrame>
      <IdeaList ideas={processedSearchResults} />
    </PageFrame>
  );
};
