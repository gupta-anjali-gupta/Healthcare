import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import FileScreen from '../screens/File/FileScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import { Image } from 'react-native';
import Icons from '../utils/Icons';
import appTheme from '../utils/appTheme';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = Icons.home;
                    } else if (route.name === 'Calendar') {
                        icon = Icons.calender;
                    } else if (route.name === 'File') {
                        icon = Icons.file;
                    } else if (route.name === 'Chat') {
                        icon = Icons.chat;
                    }
                    return <Image source={icon} size={size} style={{ tintColor: color }} />;
                },
                tabBarActiveTintColor: appTheme.primary,
                tabBarInactiveTintColor: appTheme.secondary,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { paddingTop: 7, backgroundColor: appTheme.gray, borderTopLeftRadius: 15, borderTopRightRadius: 15 }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="File" component={FileScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
        </Tab.Navigator>
    );
}
