import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetails from "./screens/UserDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";

  let BottomTabNavigator = createBottomTabNavigator();
// let StackNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator>
          <BottomTabNavigator.Screen name={'users'} component={UsersPageNavigator}/>
          <BottomTabNavigator.Screen name={'home'} component={Home}/>
      </BottomTabNavigator.Navigator>

      {/*<StackNavigator.Navigator initialRouteName={'Users'}>*/}
      {/*    <StackNavigator.Screen name={'Home'} component={Home}/>*/}
      {/*    <StackNavigator.Screen name={'Users'} component={Users}/>*/}
      {/*    <StackNavigator.Screen name={'Details'} component={UserDetails}/>*/}
      {/*</StackNavigator.Navigator>*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
