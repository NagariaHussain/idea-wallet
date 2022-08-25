import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const RightArrowIcon = (props) => (
  <Svg
    width={9}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.5 13 6-6-6-6"
      stroke="#666"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

