import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {appStyles, colores} from '../themes/appTheme';

export default function SettingsScreens() {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...appStyles.globalMargin,
        marginTop: (insets.top = 20),
      }}>
      <Text style={appStyles.title}>SettingsScreens</Text>
      <Text>{JSON.stringify(authState)}</Text>
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
