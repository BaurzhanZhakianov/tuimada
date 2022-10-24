import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a4 4 0 014-4h5a4 4 0 014 4v5a4 4 0 01-4 4h-5a4 4 0 01-4-4v-5zm4-2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2h-5z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a4 4 0 014-4h5a4 4 0 014 4v.208a1 1 0 11-2 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2h.208a1 1 0 110 2H6a4 4 0 01-4-4V6z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
