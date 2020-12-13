import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Image
          source={require('../assets/search.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Search for messages or users"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    height: 40,
    width: '80%',
    borderRadius: 30,
    marginTop: 25,
  },
  imageStyle: {
    padding: 10,
    margin: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
