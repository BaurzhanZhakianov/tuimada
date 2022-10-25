import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8 8L13 3.8c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0L8 7 3.9 2.9c-.3-.3-.7-.3-.9 0-.3.2-.3.6 0 .9L7.2 8 3 12.2c-.3.3-.3.7 0 .9.3.3.7.3.9 0L8 9l4.1 4.1c.3.3.7.3.9 0 .3-.3.3-.7 0-.9L8.8 8z"
        fill="#231F20"
      />
    </Svg>
  );
}

export default SvgComponent;
