import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ideaDataFixture from "../fixtures/ideaData";

async function saveIdeaDataToStorage(data) {
  try {
    await AsyncStorage.setItem("@ideaData", JSON.stringify(data));
    console.log("Idea data updated.");
  } catch (e) {
    console.error("Error storing idea data back to storage");
  }
}

async function loadCurrentIdeaData() {
  let parsedIdeaData = ideaDataFixture; // To make more robust

  // Load the old ideas
  try {
    const ideaData = await AsyncStorage.getItem("@ideaData");
    if (ideaData !== null) {
      try {
        parsedIdeaData = JSON.parse(ideaData);
        return parsedIdeaData;
      } catch (e) {
        console.log("Error Parsing ideaData: ", ideaData);
        throw e;
      }
    }
  } catch (e) {
    console.error("Error Fetching ideaData from local storage: ", e);
    throw e;
  }
}

export const createIdea = async (data) => {
  console.debug("creating new idea");
  const currentIdeaData = await loadCurrentIdeaData();

  // Append this new one
  const newIdeaID = uuidv4();
  currentIdeaData.ideas[newIdeaID] = {
    id: newIdeaID,
    createdAt: new Date(),
    ...data,
  };

  // Save the updated data to the storage
  await saveIdeaDataToStorage(currentIdeaData);
};

export const deleteIdea = async (ideaId, ideaData) => {
  console.debug("Deleting idea:", ideaData.ideas[ideaId]);
  // Remove this idea from the ideas list
  // ideaData.ideas.
  delete ideaData.ideas[ideaId];
  // TODO: Delete the attachments too.
  // Save the data back to storage
  await saveIdeaDataToStorage(ideaData);
};

export const createCategory = async (data) => {
  const currentIdeaData = await loadCurrentIdeaData();

  // Append this new one
  const newCategoryId = uuidv4();
  currentIdeaData.categories[newCategoryId] = {
    id: newCategoryId,
    createdAt: new Date(),
    ...data,
  };

  // Save the updated data to the storage
  await saveIdeaDataToStorage(currentIdeaData);

  return newCategoryId;
};
