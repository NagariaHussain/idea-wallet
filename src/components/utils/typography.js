import styled from "styled-components";

export const PageTitle = styled.Text`
  color: ${({ theme }) => theme.colors.typography.pageTitle};
  font-family: ${({ theme }) => theme.fonts.pageHeading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  text-align: left;
`;

export const PageSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.typography.pageSubtitle};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: left;
`;

export const SecondaryHeading = styled.Text`
  color: ${({ theme }) => theme.colors.typography.heading};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 8px;
  margin-top: 30px;
`;
