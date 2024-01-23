import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useIsFocused } from '@react-navigation/native';

function SvgComponent() {
  const isFocused = useIsFocused();
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.875 7.313h5.688V13"
        stroke={!isFocused ? '#979797' : 'rgba(0, 117, 255, 1)'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.438 18.688L8.6 12.524a1.624 1.624 0 012.298 0l2.577 2.577a1.624 1.624 0 002.298 0l6.976-6.976"
        stroke={!isFocused ? '#979797' : 'rgba(0, 117, 255, 1)'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
