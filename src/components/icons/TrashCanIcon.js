import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const TrashCanIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M3 6h2m0 0h16M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6H5Zm3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6"
      stroke="#666"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
