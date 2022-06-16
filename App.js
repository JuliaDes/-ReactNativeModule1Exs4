import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.blueContainer}></View>
        <View style={styles.redContainer}></View>
        <View style={styles.column}>
        <View style={styles.purpleContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.pinkContainer}></View>
        </View>
      </View>

      <View style={styles.column}>
        <View style={styles.greyContainer}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  row:{
    flexDirection: "row",
    flex: 1,
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  blueContainer:{
    flex: 0.5,
    backgroundColor: 'blue'
  },
  redContainer:{
    flex: 2,
    backgroundColor: 'red'
  },
  purpleContainer: {
    flex: 2,
    backgroundColor: 'purple'

  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  purpleContainer:{
    flex: 3,
    backgroundColor: 'purple'
  },
  yellowContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: 'pink'
  },
  greyContainer:{
    flex: 1,
    backgroundColor: 'grey'
  }


})