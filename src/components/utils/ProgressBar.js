import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.View`
  height: 0;
  display: flex;
  flex: 1;
  margin: 0px 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.icon.dark};
`;

const ProgressInternalBar = styled.View`
  position: absolute;
  left: 0;
  top: -1.5px;
  width: 0%;
  z-index: 99;
  height: 0;
  border: 1.5px solid ${({ theme }) => theme.colors.primary.main};
`;

const ProgressIndicatorCircle = styled.View`
  position: absolute;
  width: 8px;
  height: 8px;
  left: -4px;
  top: -4px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 100%;
`;

export const ProgressBar = ({ progressFraction }) => {
  const progress = progressFraction * 100;

  return (
    <ProgressBarContainer>
      <ProgressIndicatorCircle
        style={{
          left: progress > 0 ? `${progress}%` : -4,
        }}
      />
      <ProgressInternalBar style={{ width: `${progress}%` }} />
    </ProgressBarContainer>
  );
};
