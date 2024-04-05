import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import db from './services/database';
import AddingArea from './components/AddingArea';
import ToDoItem from './components/ToDoItem';

export default function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(undefined);

  useEffect(() => {
    db.transaction((tr) => {
      tr.executeSql('create table if not exists items(id integer primary key autoincrement, task text, done int);');
    })
    db.transaction((tr) => {
      tr.executeSql('SELECT * FROM items', null,
        (obj, resultSet) => setItems(resultSet.rows._array),
        (obj, error) => console.log(error),
      );
    })
  }, []);

  const onDelete = (id) => {
    db.transaction((tr) => {
      tr.executeSql('DELETE FROM items WHERE id = ?', [id],
        (obj, resultSet) => {
          if(resultSet.rowsAffected > 0) {
            setItems([...items].filter(item => item.id !== id));
          }
        },
        (obj, error) => console.log(error)
      );
    });
  };

  
  const onAdd = () => {
    db.transaction((tr) => {
    tr.executeSql('INSERT INTO items(task, done) VALUES(?, 0);', [currentItem],
      (obj, resultSet) =>  {
        setItems([...items, {id: resultSet.insertId, task: currentItem, done: 0}])
        setCurrentItem(undefined);
      },
      (obj, error) => console.log(error),
    );
  });
}

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <View key={index}>
          <ToDoItem id={item.id} name={item.task} onDelete={onDelete}/>
        </View>
      )
    });
  };

  return (
    <View style={styles.container}>
      <AddingArea text={currentItem} onChangeText={setCurrentItem} onPress={onAdd}/>
      <ScrollView>
        {renderItems()}
      </ScrollView>
    </View>
  )

  /* return (
    <View style={styles.container}>
      <AddingArea />
      <ToDoItems />
    </View> 
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e1dd',
  },
});
