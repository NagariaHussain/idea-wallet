import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const CheckIcon = (props) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26.582 10.27 13.29 23.56l-6.042-6.042"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
