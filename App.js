import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Posts from "./components/Posts";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Posts/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
