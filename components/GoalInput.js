import {Button, Modal, StyleSheet, TextInput, View, Image} from "react-native";
import {useState} from "react";
import goalImg from '../assets/images/goal.png';

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
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={goalImg} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={handleInput}
          value={enteredText}
          placeholderTextColor='#8F99A8'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='#D3D8DE' title='Add Goal' onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button color='#D3D8DE' title='Cancel' onPress={props.cancelInput}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 15,
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5642A6'
  }
  ,
  textInput: {
    borderWidth: 1,
    borderColor: '#C5CBD3',
    padding: 10,
    width: '100%',
    marginBottom: 10,
    color: '#D3D8DE'
  }
  ,
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})