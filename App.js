import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './pages/main';
import Login from './pages/login';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!isFontsLoaded) {
      Font.loadAsync({
        'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      }).then(() => setFontsLoaded(true));
    }
  }, [setFontsLoaded, isFontsLoaded]);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="main" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
