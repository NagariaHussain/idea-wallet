import React, { useState } from "react";
import styled from "styled-components";
import ImageView from "react-native-image-viewing";

import { CenteredRow } from "../../components/utils/Row";
import { TouchableOpacity } from "react-native";
import { PageSubtitle } from "../../components/utils/typography";

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
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      {images.length > 0 ? (
        <>
          <ImagesRow>
            {images.map((image, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => {
                    setCurrentImageIndex(idx);
                    setIsImageViewerVisible(true);
                  }}
                >
                  <ImageAttachment source={{ uri: image.uri }} />
                </TouchableOpacity>
              );
            })}
          </ImagesRow>
          <ImageView
            visible={isImageViewerVisible}
            images={images}
            imageIndex={currentImageIndex}
            onRequestClose={() => setIsImageViewerVisible(false)}
          />
        </>
      ) : (
        <PageSubtitle>No Images</PageSubtitle>
      )}
    </>
  );
};
