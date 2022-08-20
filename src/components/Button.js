import React from "react";
import { Pressable, Text } from "react-native";
import styled from "styled-components/native";

const BaseButtonContainer = styled(Pressable).attrs((props) => ({
  android_ripple: { color: props.theme.colors.primary.light },
}))`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
`;

const PrimaryButtonContainer = styled(BaseButtonContainer)`
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

const SecondaryButtonContainer = styled(BaseButtonContainer)`
  background-color: white;
  border: ${({ theme }) => `1px solid ${theme.colors.stroke.main}`};
`;

const DangerButtonContainer = styled(BaseButtonContainer)`
  background-color: ${({ theme }) => theme.colors.danger};
`;

const BaseButtonText = styled(Text)`
  letter-spacing: 0.005rem;
  line-height: 42px;
  padding: 0 18px;
  font-family: ${(props) => props.theme.fonts.buttonText};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const PrimaryButtonText = styled(BaseButtonText)`
  color: white;
`;

const SecondaryButtonText = styled(BaseButtonText)`
  color: ${({ theme }) => theme.colors.typography.pageTitle};
`;

export const Button = ({ children, type, onPress }) => {
  let ButtonContainer;
  let ButtonText;

  if (type === "secondary") {
    ButtonContainer = SecondaryButtonContainer;
    ButtonText = SecondaryButtonText;
  } else if (type === "danger") {
    ButtonContainer = DangerButtonContainer;
    ButtonText = PrimaryButtonText;
  } else {
    ButtonContainer = PrimaryButtonContainer;
    ButtonText = PrimaryButtonText;
  }

  return (
    <>
      <ButtonContainer onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </ButtonContainer>
    </>
  );
};

Button.defaultProps = {
  type: "primary",
};
