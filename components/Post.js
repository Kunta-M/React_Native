import React from "react";
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Post = ({item}) => {
    return <View style={[styles.postBox, styles.margins, styles.sizes]}>
            <Text style={styles.postBox}>{item.title}</Text>
           </View>;
};
export default Post;

let styles = StyleSheet.create({
    postBox: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        textAlign: 'center',
    },
    margins: {
        marginBottom: 3,
    },
    sizes: {
        width: '100%',
        height: 50,
    },

});