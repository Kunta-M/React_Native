import React from "react";
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import UserDetails from "./UserDetails";
import Users from "../components/Users";

let StackNavigator = createStackNavigator();

const UsersPageNavigator = (props) => {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Users'} component={Users}/>
            <StackNavigator.Screen name={'Details'} component={UserDetails}/>
        </StackNavigator.Navigator>
    );
};
export default UsersPageNavigator;

let styles = StyleSheet.create({});