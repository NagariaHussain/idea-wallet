import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { IdeaContext } from "../../provider/idea";
import { CenteredRow } from "../../components/utils/Row";
import styled from "styled-components";

const ImageAttachment = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.stroke.main};
`;

const ImagesRow = styled(CenteredRow)`
  margin-top: 20px;
`;

export const IdeaDetailScreen = ({ route }) => {
  const ideaId = route.params.ideaId;
  const { ideaData } = useContext(IdeaContext);
  const imageAttachments = ideaData.ideas[ideaId]?.images || []; // Also, handles the case when no image attachments

  return (
    <View style={styles.container}>
      <Text>Images: {imageAttachments.length}</Text>
      <ImagesRow>
        {imageAttachments.map((image, idx) => {
          return <ImageAttachment key={idx} source={{ uri: image.uri }} />;
        })}
      </ImagesRow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
