import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const generalCategoryId = uuidv4();

const ideaDataFixture = {
  ideas: {},
  categories: {},
};

ideaDataFixture.categories[generalCategoryId] = {
  id: generalCategoryId,
  title: "General",
  emoji: "💡",
};

export default ideaDataFixture;
