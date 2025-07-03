import { Text } from 'react-native';
import React from 'react';
import appTheme from '../../utils/appTheme';

const CustomText = ({
  text,
  color = appTheme.black,
  fontSize = 14,
  fontFamily,
  fontWeight = '500',
  customStyle
}) => {
  return (
    <Text
      style={[{
        color: color,
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
         lineHeight: fontSize * 1.2
      }, customStyle]}
    >
      {text}
    </Text>
  );
};

export default CustomText;