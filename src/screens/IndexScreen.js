import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button
        title='Add Post'
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <EvilIcons name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen