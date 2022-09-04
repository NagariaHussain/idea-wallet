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
  PageTitle,
  SecondaryHeading,
} from "../../components/utils/typography";
import { CenteredColumn } from "../../components/utils/column";
import { LinkAttachmentList } from "./LinkAttachmentList";

const IdeaDetailScrollView = styled(ScrollView)`
  padding: 10px 24px;
  flex: 1;
`;

const HeaderEmoji = styled.Text`
  font-size: 60px;
  margin-bottom: 17px;
`;

const HeaderColumn = styled(CenteredColumn)`
  margin-bottom: 40px;
`;

const IdeaHeader = ({ title, emoji }) => {
  return (
    <HeaderColumn>
      <HeaderEmoji>{emoji}</HeaderEmoji>
      <PageTitle numberOfLines={2}>{title}</PageTitle>
    </HeaderColumn>
  );
};

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
        <IdeaHeader title={idea.title} emoji={idea.emoji} />

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
