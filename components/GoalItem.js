import {Text, View, StyleSheet} from "react-native";

export default function GoalItem({text}) {
  return (
    <View style={styles.goalListItem}>
      {/*ItemDataObj is an object with built-in properties, like, for example, an "item" property*/}
      <Text>{text}</Text>
    </View>
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