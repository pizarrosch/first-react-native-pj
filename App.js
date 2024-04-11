import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsArr, setGoalsArr] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startHandler() {
    setModalIsVisible(true);
  }

  function terminateHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    setGoalsArr((prevState) => [...prevState, {text: enteredText, key: Math.random().toString()}]);
    terminateHandler();
  }

  function deleteGoalHandler(id) {
   setGoalsArr(currentGoals => {
     return currentGoals.filter(goal => goal.key !== id);
   })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#2D72D2' onPress={startHandler}/>
      <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} cancelInput={terminateHandler}/>
      <View style={styles.listContainer}>
        {/*ScrollView is good when the number of items is limited, otherwise with every scroll all items are being
        loaded, which reduces the app performance. Better alternative is the FlatList
        */}
        <FlatList
          data={goalsArr}
          renderItem={itemDataObj => {
            return <GoalItem text={itemDataObj.item.text} onDeleteItem={deleteGoalHandler} goalItemId={itemDataObj.item.key}/>
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
    paddingHorizontal: 16,
    backgroundColor: '#1C2127'
  },
  listContainer: {
    flex: 5,
  },
});