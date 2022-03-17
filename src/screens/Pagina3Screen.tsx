import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export default function Pagina3Screen({navigation}: Props) {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina 3</Text>
      <Button title="Ir pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({});
