import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../components/TouchableIcon';

import {appStyles} from '../themes/appTheme';

export default function Tab1Screen() {
  useEffect(() => {
    console.log('Tab1');
  }, []);
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="alarm-outline" />
        <TouchableIcon iconName="american-football-outline" />
      </Text>

      {/*      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
        <Icon name="alarm-outline" size={30} color="#900" />
      </Text>
      <Text>
        <Icon name="american-football-outline" size={30} color="#900" />
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
