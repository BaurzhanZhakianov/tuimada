import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 6C11.373 6 6 11.373 6 18c0 2.538.786 4.888 2.129 6.826.444.64.551 1.497.2 2.254L6.97 30H18c6.627 0 12-5.373 12-12S24.627 6 18 6zM3 18C3 9.716 9.716 3 18 3c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15H5.792c-1.7 0-2.777-1.81-1.99-3.298l1.63-3.51A14.937 14.937 0 013 18z"
        fill="url(#paint0_linear_846_806)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 010 3h-9A1.5 1.5 0 0112 21z"
        fill="url(#paint1_linear_846_806)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 010 3h-3A1.5 1.5 0 0112 15z"
        fill="url(#paint2_linear_846_806)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_846_806"
          x1={18}
          y1={3}
          x2={18}
          y2={33}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#037445" />
          <Stop offset={0.46875} stopColor="#249F6C" />
          <Stop offset={1} stopColor="#037445" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_846_806"
          x1={18}
          y1={19.5}
          x2={18}
          y2={22.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#037445" />
          <Stop offset={0.46875} stopColor="#249F6C" />
          <Stop offset={1} stopColor="#037445" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_846_806"
          x1={15}
          y1={13.5}
          x2={15}
          y2={16.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#037445" />
          <Stop offset={0.46875} stopColor="#249F6C" />
          <Stop offset={1} stopColor="#037445" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
