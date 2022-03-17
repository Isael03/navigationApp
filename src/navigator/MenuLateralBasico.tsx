import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreens from '../screens/SettingsScreens';
import {StackNavigator} from './StackNavigator';
import {Button, useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export function MenuLateralBasico() {
  const {width} = useWindowDimensions();
  console.log(width);

  return (
    <Drawer.Navigator
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <Button
            title="Menú"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
        drawerPosition: 'left',
        drawerType: width >= 600 ? 'permanent' : 'front',
      })}>
      <Drawer.Screen
        name="StackNavigation"
        options={{
          title: 'Home',
        }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          title: 'Settings',
        }}
        component={SettingsScreens}
      />
    </Drawer.Navigator>
  );
}
