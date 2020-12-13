import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Message(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.chatImage}
        source={{
          uri: `${props.image}`,
        }}
      />
      <View style={styles.chatDetails}>
        <View>
          <Text style={styles.chatName}>{props.name}</Text>
        </View>
        <View>
          {props.read ? (
            <Text style={styles.chatMessage}>{props.message}</Text>
          ) : (
            <Text style={styles.readMessage}>{props.message}</Text>
          )}
        </View>
      </View>
      <View style={styles.chatTimingCount}>
        <View>
          <Text style={styles.chatTime}>{props.time}</Text>
        </View>
        {props.delievered ? (
          <View style={styles.badge}>
            <View style={styles.tickBadge}>
              <Image source={require('../assets/double_tick.png')} />
            </View>
          </View>
        ) : props.read ? (
          <View style={styles.badge}>
            <View style={styles.tickBadge}>
              <Image source={require('../assets/tick.png')} />
            </View>
          </View>
        ) : (
          <View style={styles.badge}>
            <View style={styles.chatBadge}>
              <Text style={styles.chatCount}>{props.count}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: 'row',
  },
  chatImage: {
    width: 60,
    borderRadius: 100,
    margin: 15,
    height: 60,
  },
  chatDetails: {
    flex: 3,
  },
  chatName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e3e3e',
    marginBottom: 5,
    marginTop: 10,
  },
  chatMessage: {
    fontSize: 15,
    color: '#a9a9a9',
  },
  readMessage: {
    fontSize: 15,
    color: '#3e3e3e',
    fontWeight: 'bold',
  },
  chatTimingCount: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 25,
    marginTop: 10,
  },
  chatTime: {
    color: '#a9a9a9',
  },
  chatBadge: {
    backgroundColor: '#9657e7',
    width: 20,
    marginLeft: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  tickBadge: {
    width: 20,
    marginLeft: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  chatCount: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});
