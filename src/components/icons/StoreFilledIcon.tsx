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
        d="M18.4 5H7c0-1.7-1.3-3-3-3H3c-.6 0-1 .4-1 1s.4 1 1 1h1c.6 0 1 .4 1 1v8c0 1.7 1.3 3 3 3h9c1.3 0 2.5-.9 2.9-2.2l1.4-5c.5-1.9-.9-3.8-2.9-3.8zM7.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#025935"
      />
    </Svg>
  );
}

export default SvgComponent;
