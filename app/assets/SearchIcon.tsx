import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useIsFocused} from '@react-navigation/native';

function SvgComponent({color}) {
  const isFocused = useIsFocused();
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.227 3.25a7.977 7.977 0 100 15.954 7.977 7.977 0 000-15.954z"
        stroke={color || !isFocused ? '#979797' : 'rgba(0, 117, 255, 1)'}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M17.179 17.179l5.571 5.571"
        stroke={color || !isFocused ? '#979797' : 'rgba(0, 117, 255, 1)'}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
