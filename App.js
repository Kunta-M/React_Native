import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";

let StackNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={'Users'}>
          <StackNavigator.Screen name={'Home'} component={Home}/>
          <StackNavigator.Screen name={'Users'} component={Users}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
