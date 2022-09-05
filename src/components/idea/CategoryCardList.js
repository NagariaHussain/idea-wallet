import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";

import { CenteredRow } from "../utils/Row";
import { IdeaCategoryCard } from "./CategoryCard";

const CategoryListContainer = styled(ScrollView).attrs({
  horizontal: true,
})`
  padding-bottom: 12px;
`;

const CategoryRow = styled(CenteredRow)`
  justify-content: center;
`;

export const CategoryCardList = ({ categories }) => {
  return (
    <CategoryListContainer>
      <CategoryRow>
        {categories
          .filter((category) => Boolean(category.title))
          .map((category) => (
            <IdeaCategoryCard key={category.id} categoryData={category} />
          ))}
      </CategoryRow>
    </CategoryListContainer>
  );
};
