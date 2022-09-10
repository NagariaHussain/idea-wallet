import React from "react";
import styled from "styled-components";

const SearchBoxInput = styled.TextInput.attrs(() => ({
  returnKeyType: "search",
  placeholder: "Search your ideas...",
  selectionColor: "black",
}))`
  background-color: white;
  margin-top: 30px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: ${({ theme }) => theme.fonts.cardSubtitle};
  padding: 13px 20px;
`;

export const SearchBox = (props) => {
  return <SearchBoxInput {...props} />;
};
