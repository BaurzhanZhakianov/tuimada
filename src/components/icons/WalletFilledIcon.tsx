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
        d="M17 2H7C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5z"
        fill="#025935"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12c0-.6.4-1 1-1h.1c.6 0 1 .4 1 1s-.4 1-1 1H15c-.6 0-1-.4-1-1z"
        fill="#fff"
      />
      <Path
        d="M15 10h7V8h-7c-2.2 0-4 1.8-4 4s1.8 4 4 4h7v-2h-7c-1.1 0-2-.9-2-2s.9-2 2-2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
