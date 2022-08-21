import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const HomeIcon = (props) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1 17 3.556-3.556m0 0L17 1l12.444 12.444m-24.888 0v17.778A1.778 1.778 0 0 0 6.333 33h5.334m17.777-19.556L33 17m-3.556-3.556v17.778A1.778 1.778 0 0 1 27.667 33h-5.334m-10.666 0a1.778 1.778 0 0 0 1.777-1.778v-7.11a1.778 1.778 0 0 1 1.778-1.779h3.556a1.778 1.778 0 0 1 1.778 1.778v7.111A1.778 1.778 0 0 0 22.333 33m-10.666 0h10.666"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
