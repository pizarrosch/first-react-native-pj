import {Text, View, StyleSheet, Pressable} from "react-native";

export default function GoalItem({text, onDeleteItem, goalItemId}) {
  return (
    <View style={styles.goalListItem}>
      {/*ItemDataObj is an object with built-in properties, like, for example, an "item" property*/}
      <Pressable
        onPress={onDeleteItem.bind(this, goalItemId)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalListItem: {
    margin: 7,
    borderRadius: 6,
    backgroundColor: '#4C90F0',
    shadowColor: '#8ABBFF',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 15
  },
  pressedItem: {
    backgroundColor: '#215DB0',
    borderRadius: 6
  },
  goalText: {
    padding: 7,
  }
})