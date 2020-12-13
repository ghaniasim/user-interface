/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from './components/Header';
import Navigation from './components/BottomNavigation';
import Search from './components/Search';
import Message from './components/Message';
import messages from './data/messages';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Header />
        <Search />
        {messages.map((message) => (
          <Message
            key={message.id}
            image={message.image}
            name={message.chatName}
            message={message.chatMessage}
            time={message.chatTime}
            count={message.chatCount}
            tick={message.tick}
            read={message.read}
            delievered={message.delievered}
          />
        ))}
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 35,
  },
});
