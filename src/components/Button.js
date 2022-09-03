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
  text-align: center;
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

export const Button = (props) => {
  let ButtonContainer;
  let ButtonText;

  const { type, children } = props;

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
      <ButtonContainer {...props}>
        <ButtonText>{children}</ButtonText>
      </ButtonContainer>
    </>
  );
};

Button.defaultProps = {
  type: "primary",
};

export const CircularButton = styled(Pressable)`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: 100%;
  background-color: white;
  justify-content: center;
  position: relative;
`;

export const circularPrimaryButton = styled(CircularButton)`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: "white";
`;
