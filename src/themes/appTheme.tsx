import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const appStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
});
