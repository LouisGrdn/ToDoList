import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import ToDoItem from './components/ToDoItem';
import AddingArea from './components/AddingArea';

export default function App() {
  const [items, setItems] = useState([])
  const [text, onChangeText] = useState('');
  const onPress = () => {
    if(text != "") {
      setItems([...items, {id: items.length+1, name: text}]);
      onChangeText("");
    }
  }

  const onDelete = (id) => {
    setItems(() => {
      const tab = [];
      items.forEach(item => {
        if(item.id != id) tab.push(item);
      });
      return tab;
    });
  }

  const renderItem = ({item}) => {
    return (
      <ScrollView>
        <ToDoItem id={item.id}name={item.name} onDelete={onDelete}/>
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <AddingArea text={text} onPressButton={onPress} onChangeInput={onChangeText}/>
      <FlatList style={{marginBottom:50}} data={items} renderItem={renderItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e1dd',
  },
});
