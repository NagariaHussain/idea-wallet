import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const CameraIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M23.328 19a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11Z" />
      <Path d="M12.328 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.328)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
