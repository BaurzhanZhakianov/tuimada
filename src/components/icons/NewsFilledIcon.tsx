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
        d="M13 9a4 4 0 00-4 4v5a4 4 0 004 4h5a4 4 0 004-4v-5a4 4 0 00-4-4h-5z"
        fill="#025935"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2a4 4 0 00-4 4v5c0 2.369 1.761 4 4 4a1 1 0 001-1v-1a6 6 0 016-6h1a1 1 0 001-1c0-2.239-1.631-4-4-4H6z"
        fill="#025935"
      />
    </Svg>
  );
}

export default SvgComponent;
