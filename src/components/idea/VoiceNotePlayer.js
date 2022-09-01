import React, { useEffect, useState } from "react";

import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CardContainer } from "../utils/Card";
import { Icons } from "../icons";
import { playSoundFromUri } from "../../lib/audio";
import { ProgressBar } from "../utils/ProgressBar";

const PlayerControlContainer = styled(CardContainer)`
  padding: 14px;
  align-items: center;
  justify-items: center;
`;

const PlayerContainer = styled(CardContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 7px 14px 7px 11px;
`;

export const VoiceNotePlayer = ({ soundUri }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [playProgress, setPlayProgress] = useState(0);

  useEffect(() => {
    (async () => {
      const soundObject = await playSoundFromUri(soundUri);
      soundObject.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setPlayProgress(0);
          setIsPlaying(false);
        }

        if (status.isPlaying) {
          const progress = status.positionMillis / status.durationMillis;
          setPlayProgress(progress);
        }
      });
      setSound(soundObject);
    })();
  }, [soundUri]);

  return (
    <PlayerContainer>
      <TouchableOpacity
        onPress={async () => {
          if (!isPlaying) {
            await sound?.replayAsync();
            setIsPlaying(true);
          } else {
            await sound?.stopAsync();
            setIsPlaying(false);
          }
        }}
      >
        <PlayerControlContainer>
          {isPlaying ? <Icons.PauseIcon /> : <Icons.PlayIcon />}
        </PlayerControlContainer>
      </TouchableOpacity>

      <ProgressBar progressFraction={playProgress} />

      <Icons.TrashCanIcon />
    </PlayerContainer>
  );
};
