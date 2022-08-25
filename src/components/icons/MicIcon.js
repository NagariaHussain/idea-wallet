import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const MicIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3v0Z"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 10v2a7 7 0 1 1-14 0v-2"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 19v4M8.5 23h8"
      stroke="#4E4E4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
