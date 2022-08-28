import React from "react";
import styled from "styled-components";

const CircularBadgeContainer = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary.main};
  height: 22px;
  width: 22px;
  border-radius: 100%;
  right: -4.5px;
  top: -5px;
  justify-content: center;
  align-items: center;
`;

const CircularBadgeText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.cardTitle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const CircularBadge = ({ children }) => (
  <CircularBadgeContainer>
    <CircularBadgeText>{children}</CircularBadgeText>
  </CircularBadgeContainer>
);
