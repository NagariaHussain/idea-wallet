import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { IdeaContext } from "../../provider/idea";
import { DeleteIdeaButton } from "../../components/idea/DeleteIdeaButton";
import { ImageAttachmentRow } from "./ImageAttachmentRow";

export const IdeaDetailScreen = ({ route }) => {
  const ideaId = route.params.ideaId;
  const { ideaData } = useContext(IdeaContext);
  const imageAttachments = ideaData.ideas[ideaId]?.images || []; // Also, handles the case when no image attachments

  return (
    <View style={styles.container}>
      <Text>Images: {imageAttachments.length}</Text>
      <ImageAttachmentRow images={imageAttachments} />
      <DeleteIdeaButton ideaId={ideaId} />
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
