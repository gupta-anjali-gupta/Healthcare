import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import BottomTab from '../BottomTab';
import SigninScreen from '../../screens/Signin/SigninScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SignIn" component={SigninScreen} />
    </Stack.Navigator>
  );
}
