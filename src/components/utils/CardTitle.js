import styled from "styled-components";

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.cardTitle};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
