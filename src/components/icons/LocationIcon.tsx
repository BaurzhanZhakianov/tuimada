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
        d="M15.385 2.438c1.467-.658 2.97.845 2.313 2.313l-5.412 12.073c-.797 1.777-3.293 1.854-4.197.128l-1.323-2.527A2.5 2.5 0 005.71 13.37l-2.527-1.324c-1.726-.904-1.65-3.4.128-4.196l12.073-5.412zm.73 1.511c-.005 0-.019-.003-.048.01L3.993 9.37a.667.667 0 00-.036 1.199l2.527 1.324a4.167 4.167 0 011.758 1.757l1.324 2.528a.667.667 0 001.199-.037L16.177 4.07c.013-.03.01-.043.01-.049a.093.093 0 00-.027-.044.094.094 0 00-.045-.027z"
        fill="#231F20"
      />
    </Svg>
  );
}

export default SvgComponent;
