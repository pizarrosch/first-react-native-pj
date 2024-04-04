import {Text, View, StyleSheet, Pressable} from "react-native";

export default function GoalItem({text, onDeleteItem, goalItemId}) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, goalItemId)}>
      <View style={styles.goalListItem}>
        {/*ItemDataObj is an object with built-in properties, like, for example, an "item" property*/}
        <Text>{text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalListItem: {
    margin: 7,
    padding: 7,
    borderRadius: 6,
    backgroundColor: '#EDEFF2',
    borderBottomWidth: 3,
    borderBottomColor: '#D3D8DE'
  }
})