import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';
import appTheme from '../../utils/appTheme';
import { validateEmail, validatePassword } from '../../utils/utility';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  placeholderTextColor,
  fieldIsFor,
  leftIcon,
  leftIconPress,
  rightIcon,
  rightIconPress,
  iconStyle = {},
  fontSize = 14,
  height = 45,
  error,
  customStyle,
}) => {
  if (fieldIsFor === 'Email' && value && !validateEmail(value)) {
    error = 'Please enter a valid email address';
  }
  if (fieldIsFor === 'Password' && value && !validatePassword(value)) {
    error = 'Password must be at least 8 characters long';
  }
  return (
    <View style={styles.wrapper}>
      <CustomText
        text={label}
        fontSize={fontSize}
        color={placeholderTextColor}
        customStyle={{
          top: 18,
          left: 20,
          backgroundColor: appTheme.white,
          zIndex: 999,
          width: '23%',
          paddingLeft: 10,
        }}
      />
      <View style={styles.inputWrapper}>
        {leftIcon && (
          <TouchableOpacity
            onPress={leftIconPress}
            style={{ position: 'absolute', left: 15, top: 17 }}
          >
            <Image
              style={[
                iconStyle,
                { width: 22, height: 22, resizeMode: 'contain' },
              ]}
              source={leftIcon}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.input, { height: height }, customStyle]}
          onChangeText={onChangeText}
          value={value}
          keyboardType="default"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={fieldIsFor === 'Password'}
        />
        {error && (
          <CustomText text={error} fontSize={12} color={appTheme.error} />
        )}
        {rightIcon && (
          <TouchableOpacity
            onPress={rightIconPress}
            style={{ position: 'absolute', right: 24, top: 12 }}
          >
            <Image
              style={[iconStyle, { width: 22, height: 22 }]}
              source={rightIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 8,
  },
  input: {
    paddingHorizontal: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appTheme.border,
    color: appTheme.black,
    position: 'relative',
  },
  inputWrapper: {
    gap: 5,
  },
});
