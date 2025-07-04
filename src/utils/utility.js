import { launchImageLibrary } from 'react-native-image-picker';
import { emailRegex, passwordRegex } from './regex';

export const validatePassword = password => {
  return passwordRegex.test(password);
};

export const validateEmail = email => {
  return emailRegex.test(email);
};



export const pickImageOrVideo = (uploadToCloudinary) => {
  const options = {
    mediaType: 'mixed', // 'photo', 'video', or 'mixed'
  };

  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled');
    } else if (response.errorCode) {
      console.log('Error: ', response.errorMessage);
    } else {
      console.log('File: ', response.assets[0]);
      uploadToCloudinary(response.assets[0]);
    }
  });
};







