import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: blogPost.id})}>
          <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ShowScreen;