import * as ImagePicker from "expo-image-picker";

export const launchCameraAndGetImage = async () => {
  try {
    await ImagePicker.requestCameraPermissionsAsync();
  } catch (e) {
    console.error("Error getting camera permissions...");
  }

  try {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
  } catch (e) {
    console.error("Error lauching camera...");
    return null;
  }
};
