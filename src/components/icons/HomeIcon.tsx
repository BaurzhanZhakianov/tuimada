import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="black"
      fillRule={'evenodd'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.819 4.666a2.815 2.815 0 00-3.638 0L4.795 9.12C4.305 9.526 4 10.167 4 10.866v8.008C4 19.554 4.504 20 5 20h2a1 1 0 001-1v-3.315c0-1.668 1.286-3.126 3-3.126h2c1.714 0 3 1.458 3 3.126V19a1 1 0 001 1h2c.496 0 1-.446 1-1.126v-8.008c0-.699-.304-1.34-.795-1.746l-5.386-4.454zm1.274-1.541l5.386 4.453c.97.803 1.521 2.02 1.521 3.288v8.008C22 20.542 20.714 22 19 22h-2a3 3 0 01-3-3v-3.315c0-.68-.504-1.126-1-1.126h-2c-.496 0-1 .445-1 1.126V19a3 3 0 01-3 3H5c-1.714 0-3-1.458-3-3.126v-8.008c0-1.269.55-2.485 1.521-3.288l5.386-4.453a4.814 4.814 0 016.186 0z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
