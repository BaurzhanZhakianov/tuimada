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
        d="M3 2a1 1 0 000 2h1a1 1 0 011 1v8a3 3 0 003 3h8.98a3 3 0 002.89-2.197l1.39-5A3 3 0 0018.368 5H7a3 3 0 00-3-3H3zm4 11V7h11.369a1 1 0 01.963 1.268l-1.389 5a1 1 0 01-.963.732H8a1 1 0 01-1-1zM5 19.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zM14 19.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
