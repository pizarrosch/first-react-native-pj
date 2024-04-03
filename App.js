import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [goalsArr, setGoalsArr] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInput(inputText) {
    setEnteredText(inputText);
  }

  function addGoalHandler() {
    setGoalsArr((prevState) => [...prevState, {text: enteredText, key: Math.random().toString()}]);
    setEnteredText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={handleInput} value={enteredText}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.listContainer}>
        {/*ScrollView is good when the number of items is limited, otherwise with every scroll all items are being
        loaded, which reduces the app performance. Better alternative is the FlatList
        */}
        <FlatList
          data={goalsArr}
          renderItem={itemDataObj => {
            return (
              <View style={styles.goalListItem}>
                {/*ItemDataObj is an object with built-in properties, like, for example, an "item" property*/}
                <Text>{itemDataObj.item.text}</Text>
              </View>
            )
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C5CBD3'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C5CBD3',
    padding: 10,
    marginRight: 10,
    width: '75%'
  },
  listContainer: {
    flex: 5,
  },
  goalListItem: {
    margin: 7,
    padding: 7,
    borderRadius: 6,
    backgroundColor: '#EDEFF2',
    borderBottomWidth: 3,
    borderBottomColor: '#D3D8DE'
  }
});