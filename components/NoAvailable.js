import { StyleSheet, Text, View } from "react-native";

function NoAvailable() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>No available</Text>
      </View>
    </View>
  );
}
export default NoAvailable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
