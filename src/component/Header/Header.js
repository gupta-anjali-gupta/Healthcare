import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';
import appTheme from '../../utils/appTheme';

const Header = ({ title, leftIcon, leftIcon2, rightIcon }) => {
  return (
    <View style={styles.header}>
      {leftIcon && <Image source={leftIcon} style={styles.icon} />}
      {leftIcon2 && leftIcon2}
      <CustomText text={title} color={appTheme.secondary} />
      <View style={styles.right}>
        <Image source={rightIcon} style={styles.icon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 60,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  right: {
    marginLeft: 'auto',
  },
});
