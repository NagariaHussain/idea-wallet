import React from "react";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";

import styled from "styled-components";
import { IdeaContext } from "../../provider/idea";
import { ImageAttachmentRow } from "./ImageAttachmentRow";
import { VoiceNotePlayer } from "../../components/idea/VoiceNotePlayer";
import { DeleteIdeaButton } from "../../components/idea/DeleteIdeaButton";
import {
  PageSubtitle,
  SecondaryHeading,
} from "../../components/utils/typography";
import { LinkAttachmentList } from "./LinkAttachmentList";
import { EmojiPageHeader } from "../../components/utils/EmojiPageHeader";

const IdeaDetailScrollView = styled(ScrollView)`
  padding: 10px 24px;
  flex: 1;
`;

export const IdeaDetailScreen = ({ route }) => {
  const ideaId = route.params.ideaId;
  const { ideaData, isLoading } = useContext(IdeaContext);
  const idea = ideaData.ideas[ideaId];
  const imageAttachments = ideaData.ideas[ideaId]?.images || []; // Also, handles the case when no image attachments

  return (
    <IdeaDetailScrollView>
      <View>
        {isLoading && <Text>Loading...</Text>}

        {/* Page Header */}
        <EmojiPageHeader title={idea.title} emoji={idea.emoji} />

        {/* Image Attachements */}
        <SecondaryHeading>Images</SecondaryHeading>
        <ImageAttachmentRow images={imageAttachments} />

        {/* Voice Note Attachment */}
        <SecondaryHeading>Voice Note</SecondaryHeading>
        {idea?.voiceNote ? (
          <VoiceNotePlayer soundUri={idea.voiceNote.uri} />
        ) : (
          <PageSubtitle>Not Attached</PageSubtitle>
        )}

        {/* Link Attachments */}
        <SecondaryHeading>Links</SecondaryHeading>
        <LinkAttachmentList links={idea?.links} />

        {/* Delete Idea Button */}
        <DeleteIdeaButton ideaId={ideaId} />
      </View>
    </IdeaDetailScrollView>
  );
};
