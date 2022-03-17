import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina1Screen from '../screens/Pagina1Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParamList = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1Screen"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerShown: true,
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        component={Pagina1Screen}
        options={{
          headerShown: true,
          title: 'Pagina1',
        }}
      />
      <Stack.Screen
        name="Pagina2Screen"
        component={Pagina2Screen}
        options={{title: 'Pagina2'}}
      />
      <Stack.Screen
        name="Pagina3Screen"
        component={Pagina3Screen}
        options={{title: 'Pagina3'}}
      />
      <Stack.Screen
        name="PersonaScreen"
        component={PersonaScreen}
        options={{title: 'Persona'}}
      />
    </Stack.Navigator>
  );
}
