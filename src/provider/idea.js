import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ideaDataFixture from "../fixtures/ideaData";

export const IdeaContext = createContext();

export const IdeaContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [ideaData, setIdeaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const reloadIdeaData = async () => {
    await retrieveIdeas();
  };

  const retrieveIdeas = async () => {
    console.log("Loading Ideas from storage...");
    setIsLoading(true);

    // Fetch ideas from async storage
    try {
      const jsonValue = await AsyncStorage.getItem("@ideaData");
      if (jsonValue !== null) {
        setIdeaData(JSON.parse(jsonValue));
        console.debug("Idea Data Loaded.");
        setIsLoading(false);
      } else {
        // Populate with fixture data
        console.debug("ideaData has null value");
        setIdeaData(ideaDataFixture);
        await AsyncStorage.setItem(
          "@ideaData",
          JSON.stringify(ideaDataFixture)
        );
        setIsLoading(false);
      }
    } catch (e) {
      console.error("Error occured while loading ideaData");
      setError(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reloadIdeaData();
  }, []);

  return (
    <IdeaContext.Provider
      value={{
        ideaData,
        isLoading,
        error,
        reloadIdeaData,
      }}
    >
      {children}
    </IdeaContext.Provider>
  );
};
