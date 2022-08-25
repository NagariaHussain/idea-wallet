import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ideaData as mockIdeaData } from "../mocks/ideaData.mock";

export const IdeaContext = createContext();

const storeMockData = async () => {
  try {
    await AsyncStorage.setItem("@ideaData", JSON.stringify(mockIdeaData));
  } catch (e) {
    console.log("Error", e);
  }
};

export const IdeaContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [ideaData, setIdeaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveIdeas = async () => {
    setIsLoading(true);
    setIdeaData([]);

    // Fetch ideas from async storage
    try {
      const jsonValue = await AsyncStorage.getItem("@ideaData");
      if (jsonValue !== null) {
        setIdeaData(JSON.parse(jsonValue));
        // console.log(ideaData);
      } else {
        console.log("retrieveIdeas: @ideaData has null value");
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    retrieveIdeas();
  }, []);

  return (
    <IdeaContext.Provider
      value={{
        ideaData,
        isLoading,
        error,
      }}
    >
      {children}
    </IdeaContext.Provider>
  );
};
