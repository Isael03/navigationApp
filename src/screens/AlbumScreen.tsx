import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

export default function AlbumScreen() {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>AlbumScreen</Text>
      {isLoggedIn && <Button title="logout" onPress={() => logout()} />}
    </View>
  );
}

const styles = StyleSheet.create({});
