import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {RootStackParamList} from '../navigator/StackNavigator';
import {appStyles} from '../themes/appTheme';

interface Props extends StackScreenProps<RootStackParamList, 'PersonaScreen'> {}

export default function PersonaScreen({route, navigation}: Props) {
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
