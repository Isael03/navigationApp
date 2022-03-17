import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Tab2Screen() {
  useEffect(() => {
    console.log('Tab2');
  }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
