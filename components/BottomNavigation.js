import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/chat.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../assets/people.png')} />
      </View>
      <View style={styles.icon}>
        <Image source={require('../assets/preferences.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    height: 80,
    borderRadius: 35,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  icon: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
