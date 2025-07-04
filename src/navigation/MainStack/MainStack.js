import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import BottomTab from '../BottomTab';
import SigninScreen from '../../screens/Signin/SigninScreen';
import ReminderScreen from '../../screens/Reminder/ReminderScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SignIn" component={SigninScreen} />
       <Stack.Screen name="Reminder" component={ReminderScreen} />
    </Stack.Navigator>
  );
}
