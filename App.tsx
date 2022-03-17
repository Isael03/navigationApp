import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {Tabs} from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';

export default function App() {
  //LogBox.ignoreLogs(['If you want to use Reanimated ']);
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/*  <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
}

function AppState({children}: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
