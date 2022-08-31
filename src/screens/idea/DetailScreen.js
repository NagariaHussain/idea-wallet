import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useContext } from "react";
import { IdeaContext } from "../../provider/idea";
import { CenteredRow } from "../../components/utils/Row";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { deleteIdea } from "../../lib/storage";
import { useNavigation } from "@react-navigation/native";

const ImageAttachment = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.stroke.main};
`;

const ImagesRow = styled(CenteredRow)`
  margin-top: 20px;
`;

const DeleteIdeaButton = ({ ideaId, ideaData }) => {
  const navigation = useNavigation();

  // Confirm deletion
  const showDeletionAlert = () => {
    Alert.alert(
      "Delete Idea",
      "This idea will be gone 😔. Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteIdea(ideaId, ideaData);
            navigation.navigate("IdeaDashboard", { reloadData: true });
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <Button type="danger" onPress={showDeletionAlert}>
      Delete
    </Button>
  );
};

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
      <DeleteIdeaButton ideaId={ideaId} ideaData={ideaData} />
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
