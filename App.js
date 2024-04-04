import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsArr, setGoalsArr] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addGoalHandler(enteredText) {
    setGoalsArr((prevState) => [...prevState, {text: enteredText, key: Math.random().toString()}]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        {/*ScrollView is good when the number of items is limited, otherwise with every scroll all items are being
        loaded, which reduces the app performance. Better alternative is the FlatList
        */}
        <FlatList
          data={goalsArr}
          renderItem={itemDataObj => {
            return <GoalItem text={itemDataObj.item.text}/>
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
  listContainer: {
    flex: 5,
  },
});