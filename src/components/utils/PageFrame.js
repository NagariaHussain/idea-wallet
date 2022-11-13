import React from "react";
import styled from "styled-components";

const PageFrameView = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

export const PageFrame = ({ children }) => {
  return <PageFrameView>{children}</PageFrameView>;
};
