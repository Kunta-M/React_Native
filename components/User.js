import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = (props) => {

    let {item, nav: {navigate}} = props;

    return <View style={[styles.userBox, styles.margins, styles.sizes]}>
            <Text>{item.id}. {item.name}</Text>
            <Button title={'user details'} onPress={() => {navigate('Details', {data: item})}}/>
           </View>;
};
export default User;

let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        textAlign: 'center',
    },
    margins: {
        margin: 5,
    },
    sizes: {
        width: '70%',
        height: 70,
    },
});