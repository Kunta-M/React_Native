import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getPosts} from "../services/api.service";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState();

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post item={item}/>}
                keyExtractor={item => '' + item.id}
            />

           </View>;
}

export default Posts;

let styles = StyleSheet.create({});