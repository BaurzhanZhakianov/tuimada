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
        d="M2 7a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7zm5-3a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12a4 4 0 014-4h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a4 4 0 01-4-4zm4-2a2 2 0 100 4h5v-4h-5z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12a1 1 0 011-1h.1a1 1 0 110 2H15a1 1 0 01-1-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
