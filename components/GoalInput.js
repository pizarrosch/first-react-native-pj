import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  function handleInput(inputText) {
    setEnteredText(inputText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={handleInput}
                 value={enteredText}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
})