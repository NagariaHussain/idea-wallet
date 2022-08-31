// Based On: https://docs.expo.dev/versions/latest/sdk/audio/#recording-sounds

import { Audio } from "expo-av";

export const startAndGetRecording = async () => {
  try {
    console.log("Requesting permissions..");
    await Audio.requestPermissionsAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    console.log("Starting recording..");
    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );

    return recording;
  } catch (e) {
    console.error(e);
  }
};

export const stopAndGetRecording = async (recording) => {
  console.log("Stopping recording..");
  await recording.stopAndUnloadAsync();
  const uri = recording.getURI();
  console.log("Recording stopped and stored at", uri);
  return recording;
};

export const playRecording = async (recording) => {
  const soundObj = await recording.createNewLoadedSoundAsync();

  if (soundObj.status.isLoaded) {
    console.log("Sound is loaded");
  }
  // Play the loaded sound
  await soundObj.sound.playAsync();
};
