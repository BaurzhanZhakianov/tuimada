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
        d="M3 10.5A7.5 7.5 0 0110.5 3h15a7.5 7.5 0 017.5 7.5v15a7.5 7.5 0 01-7.5 7.5h-15A7.5 7.5 0 013 25.5v-15zM10.5 6A4.5 4.5 0 006 10.5v15a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0025.5 6h-15z"
        fill="url(#paint0_linear_4_56)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 18a6 6 0 016-6H30a3 3 0 013 3v6a3 3 0 01-3 3h-7.5a6 6 0 01-6-6zm6-3a3 3 0 100 6H30v-6h-7.5z"
        fill="url(#paint1_linear_4_56)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 18a1.5 1.5 0 011.5-1.5h.15a1.5 1.5 0 010 3h-.15A1.5 1.5 0 0121 18z"
        fill="url(#paint2_linear_4_56)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4_56"
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
          id="paint1_linear_4_56"
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
          id="paint2_linear_4_56"
          x1={18}
          y1={3}
          x2={18}
          y2={33}
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
