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
        d="M12 4a3 3 0 100 6 3 3 0 000-6zM7 7a5 5 0 1110 0A5 5 0 017 7zM12 20c-2.929 0-4.665-.886-5.665-2.03-.304-.348-.383-.654-.374-.905.01-.268.125-.578.386-.896C6.883 15.516 7.901 15 9 15h6c1.099 0 2.117.516 2.653 1.17.26.317.376.627.386.895.01.251-.07.557-.374.906C16.665 19.114 14.929 20 12 20zm-7.17-.713C6.302 20.972 8.653 22 12 22s5.698-1.028 7.17-2.713c.605-.691.898-1.483.868-2.295-.03-.795-.364-1.512-.84-2.092C18.263 13.758 16.664 13 15 13H9c-1.663 0-3.262.758-4.199 1.9-.475.58-.81 1.297-.839 2.092-.03.812.263 1.604.868 2.295z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
