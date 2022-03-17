import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {appStyles} from '../themes/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export default function Pagina1Screen({navigation}: Props) {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Pagina 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{...appStyles.title, marginVertical: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...appStyles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() => {
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'});
          }}>
          <Icon name="man-outline" size={25} color="white" />
          <Text style={appStyles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...appStyles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Icon name="woman-outline" size={25} color="white" />
          <Text style={appStyles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//const styles = StyleSheet.create({});
