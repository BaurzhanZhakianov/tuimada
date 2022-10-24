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
        d="M18 6c-2.362 0-4.643.986-6.338 2.769C9.966 10.554 9 12.99 9 15.546c0 3.72 2.305 7.352 4.865 10.195A34.715 34.715 0 0018 29.617a34.726 34.726 0 004.135-3.877C24.695 22.898 27 19.266 27 15.546c0-2.556-.966-4.992-2.663-6.777C22.643 6.986 20.362 6 18 6zm0 25.5l-.862 1.228-.004-.003-.008-.006-.028-.02a14.222 14.222 0 01-.457-.338 37.708 37.708 0 01-5.006-4.613C8.945 24.761 6 20.416 6 15.546c0-3.304 1.247-6.486 3.488-8.844C11.732 4.342 14.792 3 18 3s6.268 1.341 8.512 3.702C28.753 9.06 30 12.242 30 15.546c0 4.87-2.945 9.215-5.635 12.202a37.707 37.707 0 01-5.006 4.613 22.71 22.71 0 01-.457.338l-.028.02-.008.006-.003.002s-.002.001-.863-1.227zm0 0l.861 1.228a1.501 1.501 0 01-1.723 0L18 31.5z"
        fill="url(#paint0_linear_4_52)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12a3 3 0 100 6 3 3 0 000-6zm-6 3a6 6 0 1112 0 6 6 0 01-12 0z"
        fill="url(#paint1_linear_4_52)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4_52"
          x1={18}
          y1={3}
          x2={18}
          y2={32.9997}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#037445" />
          <Stop offset={0.46875} stopColor="#249F6C" />
          <Stop offset={1} stopColor="#037445" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4_52"
          x1={18}
          y1={3}
          x2={18}
          y2={32.9997}
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
