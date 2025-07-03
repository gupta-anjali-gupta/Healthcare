import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';
import appTheme from '../../utils/appTheme';

export default function CustomButton({
  title,
  onPress,
  buttonStyle,
  color,
  fontWeight,
  fontSize,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <CustomText
        text={title}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appTheme.white,
    elevation: 4
  },
});
