import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PauseIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.167 2H3.833C3.097 2 2.5 2.597 2.5 3.333v9.334c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14.5 2.597 13.903 2 13.167 2Z"
      stroke="#4E4E4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
