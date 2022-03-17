import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreens from '../screens/SettingsScreens';
import {StackNavigator} from './StackNavigator';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {appStyles, colores} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export function MenuLateral() {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Icon name="menu-outline" size={35} color={colores.primary} />
          </TouchableOpacity>
        ),
        drawerPosition: 'left',
        drawerType: width >= 600 ? 'permanent' : 'front',
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      })}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}

function MenuInterno({navigation}: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      {/**Parte del avatar */}
      <View style={appStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
          style={appStyles.avatar}
        />
      </View>

      {/**Opciones del menu */}

      <View style={appStyles.menuContainer}>
        <TouchableOpacity
          style={{
            ...appStyles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={25} color={colores.primary} />
          <Text style={appStyles.menuTexto}> Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...appStyles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={25} color={colores.primary} />
          <Text style={appStyles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
