import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveIdeaDataToStorage(data) {
  try {
    await AsyncStorage.setItem("@ideaData", JSON.stringify(data));
    console.log("Idea data updated.");
  } catch (e) {
    console.error("Error storing idea data back to storage");
  }
}

export const createIdea = async (data) => {
  console.debug("creating new idea");

  let parsedIdeaData = {
    ideas: {},
    categories: {
      1: {
        id: 1,
        title: "General",
        emoji: "💡",
      },
    },
  };

  // Load the old ideas
  try {
    const ideaData = await AsyncStorage.getItem("@ideaData");
    if (ideaData !== null) {
      try {
        parsedIdeaData = JSON.parse(ideaData);
      } catch (e) {
        console.log("Error Parsing ideaData: ", ideaData);
      }
    }
  } catch (e) {
    console.error("Error Fetching ideaData from local storage: ", e);
  }

  // Append this new one
  const newIdeaID = uuidv4();
  parsedIdeaData.ideas[newIdeaID] = {
    id: newIdeaID,
    createdAt: new Date(),
    ...data,
  };

  // Save the updated data to the storage
  await saveIdeaDataToStorage(parsedIdeaData);

  // TODO: Reload the idea in provider
  // Ever better, set this directly!!
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
