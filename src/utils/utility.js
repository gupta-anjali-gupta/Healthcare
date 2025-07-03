import { emailRegex, passwordRegex } from './regex';

export const validatePassword = password => {
  return passwordRegex.test(password);
};

export const validateEmail = email => {
  return emailRegex.test(email);
};
