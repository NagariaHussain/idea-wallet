import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";

import { IdeaContext } from "../../provider/idea";
import { DeleteIdeaButton } from "../../components/idea/DeleteIdeaButton";
import { ImageAttachmentRow } from "./ImageAttachmentRow";
import { VoiceNotePlayer } from "../../components/idea/VoiceNotePlayer";
import { Button } from "../../components/Button";
import styled from "styled-components";

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

export const IdeaDetailScreen = ({ route }) => {
  const ideaId = route.params.ideaId;
  const { ideaData, isLoading } = useContext(IdeaContext);
  const idea = ideaData.ideas[ideaId];
  const imageAttachments = ideaData.ideas[ideaId]?.images || []; // Also, handles the case when no image attachments

  return (
    <PageFrame>
      <View>
        {isLoading && <Text>Loading...</Text>}

        <Text>Images: {imageAttachments.length}</Text>
        <ImageAttachmentRow images={imageAttachments} />
        <DeleteIdeaButton ideaId={ideaId} />

        {/* TODO: Replace with a spacer component */}
        <View style={{ marginBottom: 20 }}></View>

        <Text>Voice Note</Text>
        <View style={{ marginBottom: 8 }}></View>
        {idea?.voiceNote ? (
          <VoiceNotePlayer soundUri={idea.voiceNote.uri} />
        ) : (
          <Button>Record</Button>
        )}
      </View>
    </PageFrame>
  );
};
