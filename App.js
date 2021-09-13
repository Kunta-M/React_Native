import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Users from "./components/User";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Users/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
