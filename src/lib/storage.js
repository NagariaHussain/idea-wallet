import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
  parsedIdeaData.ideas[newIdeaID] = { id: newIdeaID, ...data };

  // Save the newly created ones to the storage
  try {
    await AsyncStorage.setItem("@ideaData", JSON.stringify(parsedIdeaData));
    console.log("New idea created");
  } catch (e) {
    console.error("Error storing idea data back to storage");
    throw Error("Can't store data in phone storage");
  }

  // TODO: Also attach creation time (createdAt)
  // TODO: Reload the idea in provider
};
