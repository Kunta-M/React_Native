import React from "react";
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const UserDetails = (props) => {

    let {route: {params: {data}}, navigation} = props;

    return <View>
            <Text>{data.name}
                <br/>
                {data.email}
                <br/>
                {data.phone}
            </Text>
           </View>;
};
export default UserDetails;

let styles = StyleSheet.create({});