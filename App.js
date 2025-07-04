import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerStack from './src/navigation/DrawerStack/DrawerStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <DrawerStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
