import React from "react";
import styled from "styled-components";

import { CenteredRow } from "../../components/utils/Row";

const ImageAttachment = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.stroke.main};
`;

const ImagesRow = styled(CenteredRow)`
  margin-top: 20px;
`;
export const ImageAttachmentRow = ({ images, ideaId }) => {
  return (
    <ImagesRow>
      {images.map((image, idx) => {
        return <ImageAttachment key={idx} source={{ uri: image.uri }} />;
      })}
    </ImagesRow>
  );
};
