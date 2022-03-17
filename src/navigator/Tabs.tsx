import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../themes/appTheme';
import {Platform, Text} from 'react-native';
import TopTabNavigator from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();

export function TabsIOS(props: any) {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          backgroundColor: colores.primary,
          borderTopColor: colores.primary,
          elevation: 0,

          //borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'briefcase-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'cloud-outline';
              break;
            case 'StackNavigator':
              iconName = 'fish-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
        }}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          title: 'TopTabNavigator',
        }}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Tab3',
        }}
      />
    </BottomTabIOS.Navigator>
  );
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          elevation: 0,
          //borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'briefcase-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'cloud-outline';
              break;
            case 'StackNavigator':
              iconName = 'hand-right-outline';
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
        }}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          title: 'TopTabNavigator',
        }}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Tab3',
        }}
      />
    </BottomTabAndroid.Navigator>
  );
}
