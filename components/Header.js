import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{flex: 5}}>
        <Text style={styles.title}>Messages</Text>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <Image source={require('../assets/pen.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: 35,
  },
  title: {
    color: '#02075d',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
