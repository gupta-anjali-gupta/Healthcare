import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import appTheme from '../../utils/appTheme';
import CustomText from '../CustomText/CustomText';

const IconButton = ({
  icon,
  iconColor = undefined,
  size = 32,
  leftText,
  rightText,
  fontSize = 14,
  textColor = appTheme.text,
  onPress = null,
  width = undefined,
  height = undefined,
  customStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconBtn, customStyle, { width: width, height: height }]}
    >
      {leftText && (
        <CustomText text={leftText} fontSize={fontSize} color={textColor} />
      )}
      <Image
        source={icon}
        style={{ width: size, height: size, tintColor: iconColor }}
        resizeMode="contain"
      />
      {rightText && (
        <CustomText text={rightText} fontSize={fontSize} color={textColor} />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
  },
});
