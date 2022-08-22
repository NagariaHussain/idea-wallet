import styled from "styled-components";

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.cardTitle};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const CardSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.cardSubtitle};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.typography.cardCaption};
`;
