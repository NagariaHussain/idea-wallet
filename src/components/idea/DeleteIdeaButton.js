import React, { useContext } from "react";
import { Alert } from "react-native";
import { Button } from "../Button";
import { deleteIdea } from "../../lib/storage";
import { useNavigation } from "@react-navigation/native";
import { IdeaContext } from "../../provider/idea";

export const DeleteIdeaButton = ({ ideaId }) => {
  const navigation = useNavigation();
  const { ideaData } = useContext(IdeaContext);

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
    <Button
      style={{ marginBottom: 70 }}
      type="danger"
      onPress={showDeletionAlert}
    >
      Delete Idea
    </Button>
  );
};
