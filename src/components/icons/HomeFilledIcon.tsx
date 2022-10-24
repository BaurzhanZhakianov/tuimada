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
        d="M20.479 7.578l-5.386-4.453a4.814 4.814 0 00-6.186 0L3.521 7.578C2.551 8.381 2 9.598 2 10.866v8.008C2 20.542 3.286 22 5 22h2a3 3 0 003-3v-3.315c0-.68.504-1.126 1-1.126h2c.496 0 1 .445 1 1.126V19a3 3 0 003 3h2c1.714 0 3-1.458 3-3.126v-8.008c0-1.269-.55-2.485-1.521-3.288z"
        fill="#025935"
      />
    </Svg>
  );
}

export default SvgComponent;
