import { StyleSheet, Text, View } from "react-native";

function MealDetailOverview({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
export default MealDetailOverview;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  detailItem: {
    marginHorizontal: 4,
    backgroundColor: "#eeeeee",
    padding: 5,
    overflow: "hidden",
    borderRadius: 8,
    fontSize: 12,
  },
});
