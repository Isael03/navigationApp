import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {appStyles} from '../themes/appTheme';

export default function ContactScreen() {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>ContactScreen</Text>
      {!authState.isLoggedIn && (
        <Button
          title="SignIn"
          onPress={() => {
            signIn();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
