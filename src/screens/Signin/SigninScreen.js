import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../component/TextInput/CustomTextInput';
import appTheme from '../../utils/appTheme';
import CustomButton from '../../component/CustomButton/CustomButton';
import CustomText from '../../component/CustomText/CustomText';
import Container from '../../component/Container/Container';
import Icons from '../../utils/Icons';

const SigninScreen = (props) => {
  const navigation = props?.navigation
  const [fields, setFields] = useState([
    { label: 'Email', placeholder: 'Enter your email', icon: Icons.email },
    { label: 'Password', placeholder: 'Enter your password', icon: Icons.lock },
  ]);
  const [formData, setFormData] = useState([{ Password: '' }, { Email: '' }]);
  const [errors, setErrors] = useState([]);

  const validateForm = () => {
    let valid = true;
    setErrors([{ Password: '' }, { Email: '' }]);

    if (!formData.Email) {
      handleError('Email', 'Email is required');
      valid = false;
    }
    if (!formData.Password) {
      handleError('Password', 'Password is required');
      valid = false;
    }
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Login successful-->', formData);
      navigation.navigate("BottomTab")
    } else {
      console.log('Validation failed:', errors);
    }
  };

  const handleInputChange = (field, value) => {
    if (value && field === 'Email') {
      handleError('Email', '');
    }
    if (value && field === 'Password') {
      handleError('Password', '');
    }
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleError = (field, value) => {
    setErrors(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Container customStyle={styles.container}>
      <CustomText text={'LOGIN'} fontSize={20} color={appTheme.black} />
      <CustomText text={'Healthcare'} fontSize={32} color={appTheme.black} />
      <View style={styles.subContainer}>
        {fields.map((item, index) => (
          <CustomTextInput
            key={index}
            label={item.label}
            fontSize={13}
            height={60}
            placeholderTextColor={appTheme.secondary}
            value={formData[item.label]}
            onChangeText={text => handleInputChange(item.label, text)}
            leftIcon={item.icon}
            iconStyle={{ tintColor: appTheme.secondary }}
            fieldIsFor={item.label}
            error={errors[item.label]}
            customStyle={{
              borderColor: appTheme.black,
              borderRadius: 10,
              paddingLeft: 50,
            }}
          />
        ))}
        <TouchableOpacity style={styles.forgot}>
          <CustomText
            text={'Forgot Password !'}
            fontSize={15}
            color={appTheme.blue}
          />
        </TouchableOpacity>

        <View style={styles.register}>
          <CustomText
            text={'Don’t Have an Account : '}
            fontSize={15}
            color={appTheme.black}
          />
          <TouchableOpacity>
            <CustomText
              text={'Click here to register !'}
              fontSize={15}
              color={appTheme.blue}
            />
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton
        onPress={handleLogin}
        title={'LOGIN'}
        color={appTheme.white}
        fontSize={20}
        buttonStyle={{
          width: '85%',
          backgroundColor: appTheme.tertiary,
          height: 60,
        }}
      />
    </Container>
  );
};
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: '10%',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  subContainer: {
    width: '85%',
    gap: 15,
  },
  forgot: {
    marginLeft: 'auto',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
