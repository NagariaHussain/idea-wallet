import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";

import { CenteredRow } from "../../components/utils/Row";
import { EmojiPicker } from "../../components/utils/emojiPicker";
import { FloatingActions } from "../../components/idea/FloatingActions";
import { circularPrimaryButton } from "../../components/Button";
import { Icons } from "../../components/icons";
import { createCategory } from "../../lib/storage";
import { IdeaContext } from "../../provider/idea";

const PageFrame = styled.View`
  margin: 10px 24px;
  flex: 1;
`;

const SaveCategoryButton = styled(circularPrimaryButton)`
  margin-left: auto;
`;

const CategoryTextInput = styled.TextInput`
  flex: 1;
  padding: 15px;
  margin-left: 20px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.xs};
`;

export const NewCategoryScreen = ({ navigation }) => {
  const { reloadIdeaData } = useContext(IdeaContext);
  const [selectedEmoji, setSelectedEmoji] = useState("⚽️");
  const [categoryTitle, setCategoryTitle] = useState("");
  const titleInput = useRef(null);

  const handleCategorySave = async () => {
    if (categoryTitle.trim() === "") {
      console.debug("title is required for category.");
      titleInput.current?.focus(); // Focus the input
      return;
    }
    const categoryId = await createCategory({
      title: categoryTitle,
      emoji: selectedEmoji,
    });

    await reloadIdeaData();

    navigation.navigate("IdeaCategoryScreen", {
      categoryData: {
        title: categoryTitle,
        emoji: selectedEmoji,
        id: categoryId,
      },
    });
  };

  return (
    <PageFrame>
      <CenteredRow>
        <EmojiPicker
          selectedEmoji={selectedEmoji}
          onPick={(emoji, idx) => {
            setSelectedEmoji(emoji);
          }}
        />
        <CategoryTextInput
          ref={titleInput}
          autoFocus={true}
          placeholder="Category Title"
          value={categoryTitle}
          onChangeText={setCategoryTitle}
        />
      </CenteredRow>

      <FloatingActions>
        <SaveCategoryButton onPress={handleCategorySave}>
          <Icons.CheckIcon />
        </SaveCategoryButton>
      </FloatingActions>
    </PageFrame>
  );
};
