import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';
import MainStack from '../MainStack/MainStack';

function NotificationsScreen(props) {
  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()}>Go back home</Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
      <Drawer.Screen name="Screen 1" component={NotificationsScreen} />
      <Drawer.Screen name="Screen 2" component={NotificationsScreen} />
      <Drawer.Screen name="Screen 3" component={NotificationsScreen} />
      <Drawer.Screen name="Screen 4" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
