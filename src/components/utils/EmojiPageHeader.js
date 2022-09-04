import React from "react";
import styled from "styled-components";

import { CenteredColumn } from "./column";
import { PageTitle } from "./typography";

const HeaderEmoji = styled.Text`
  font-size: 60px;
  margin-bottom: 17px;
`;

const HeaderColumn = styled(CenteredColumn)`
  margin-bottom: 40px;
`;

export const EmojiPageHeader = ({ title, emoji }) => {
  return (
    <HeaderColumn>
      <HeaderEmoji>{emoji}</HeaderEmoji>
      <PageTitle numberOfLines={2}>{title}</PageTitle>
    </HeaderColumn>
  );
};
