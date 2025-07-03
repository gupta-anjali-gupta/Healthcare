import { Image, StyleSheet, Text, View } from 'react-native';
import Icons from '../../utils/Icons';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  const navigation = props.navigation;

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    const isLogin = await AsyncStorage.getItem('isLogin');
    if (isLogin == 'yes') {
      setTimeout(() => {
        navigation.navigate('BottomTab');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate('SignIn');
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Icons.wrapper} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
