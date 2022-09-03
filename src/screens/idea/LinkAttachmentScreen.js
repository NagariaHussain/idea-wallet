import React, { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import styled from "styled-components";
import { CenteredRow } from "../../components/utils/Row";
import { FloatingActions } from "../../components/idea/FloatingActions";
import { circularPrimaryButton } from "../../components/Button";
import { Icons } from "../../components/icons";
import { LinkAttachment } from "../../components/idea/LinkAttachment";

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

const AttachLinkButton = styled(circularPrimaryButton)`
  margin-left: auto;
`;

const CategoryTextInput = styled.TextInput`
  flex: 1;
  padding: 15px;
  margin-bottom: 20px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.xs};
`;

export const LinkAttachmentScreen = ({ navigation, route }) => {
  const existingLinkAttachments = route.params?.existingLinks || [];
  const [deletedLinkAttachments, setDeletedLinkAttachments] = useState([]);

  const [link, setLink] = useState("");

  // Check clipboard for link and set link
  const setTextValueFromClipboardContent = async () => {
    const clipboardHasString = await Clipboard.hasStringAsync();
    const clipboardHasURL = await Clipboard.hasUrlAsync();
    if (clipboardHasURL) {
      setLink(await Clipboard.getUrlAsync());
    } else if (clipboardHasString) {
      setLink(await Clipboard.getStringAsync());
    }
  };

  // Will only run once
  useEffect(() => {
    setTextValueFromClipboardContent();
  }, []);

  return (
    <PageFrame>
      <CenteredRow>
        <CategoryTextInput
          value={link}
          onChangeText={setLink}
          placeholder="Link / URL"
          autoFocus
        />
      </CenteredRow>

      {existingLinkAttachments
        .filter((l) => !deletedLinkAttachments.includes(l))
        .map((l) => (
          <LinkAttachment
            key={l}
            link={l}
            onDelete={() => setDeletedLinkAttachments((prev) => [...prev, l])}
          />
        ))}

      <FloatingActions>
        <AttachLinkButton
          onPress={() => {
            // Send the link back to input screen
            navigation.navigate("IdeaInput", {
              link,
              deleted: [...deletedLinkAttachments],
            });
          }}
        >
          <Icons.CheckIcon />
        </AttachLinkButton>
      </FloatingActions>
    </PageFrame>
  );
};
