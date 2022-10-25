import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.167 3.333a5.833 5.833 0 100 11.667 5.833 5.833 0 000-11.667zm-7.5 5.833a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
        fill="#231F20"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.578 13.577a.833.833 0 011.178 0l3.333 3.333a.833.833 0 01-1.178 1.179l-3.334-3.333a.833.833 0 010-1.179z"
        fill="#231F20"
      />
    </Svg>
  );
}

export default SvgComponent;
