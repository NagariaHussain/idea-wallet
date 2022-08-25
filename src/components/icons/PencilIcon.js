import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PencilIcon = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 1.914a2.828 2.828 0 1 1 4 4l-13.5 13.5-5.5 1.5 1.5-5.5L16 1.914Z"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
