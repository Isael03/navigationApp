import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {appStyles} from '../themes/appTheme';
import {RootStackParamList} from '../navigator/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Pagina3Screen'>;

export default function Pagina2Screen() {
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina 2</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
