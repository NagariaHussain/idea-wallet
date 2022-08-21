import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ZapIcon = (props) => (
  <Svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.333 1.667 3 11.667h7.5l-.833 6.666 8.333-10h-7.5l.833-6.666Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
