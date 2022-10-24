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
        d="M12 12a5 5 0 100-10 5 5 0 000 10zM19.2 14.9c-.9-1.1-2.5-1.9-4.2-1.9H9c-1.7 0-3.3.8-4.2 1.9-.5.6-.8 1.3-.8 2.1s.3 1.6.9 2.3C6.3 21 8.7 22 12 22s5.7-1 7.2-2.7c.6-.7.9-1.5.9-2.3-.1-.8-.4-1.5-.9-2.1z"
        fill="#025935"
      />
    </Svg>
  );
}

export default SvgComponent;
