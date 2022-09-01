import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PlayIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m3.833 2 9.334 6-9.334 6V2Z"
      stroke="#4E4E4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
