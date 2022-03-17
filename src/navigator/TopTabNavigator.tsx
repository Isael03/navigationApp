import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          paddingTop: top,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'book-outline';
              break;
            case 'Album':
              iconName = 'images-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
