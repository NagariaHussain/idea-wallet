import React from "react";
import styled from "styled-components";
import { LinkAttachment } from "../../components/idea/LinkAttachment";
import { PageSubtitle } from "../../components/utils/typography";

const LinkAttachmentListContainer = styled.View`
  margin-bottom: 30px;
`;

export const LinkAttachmentList = ({ links }) => (
  <LinkAttachmentListContainer>
    {links?.length > 0 ? (
      (links || []).map((link) => <LinkAttachment key={link} link={link} />)
    ) : (
      <PageSubtitle>No Links</PageSubtitle>
    )}
  </LinkAttachmentListContainer>
);
