import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Tab3Screen() {
  useEffect(() => {
    console.log('Tab3');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
