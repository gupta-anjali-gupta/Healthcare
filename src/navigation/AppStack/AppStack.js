import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../../screens/Signup/SignupScreen';
import HomeScreen from '../../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={HomeScreen} />
        </Stack.Navigator>
    );
}
