import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridStyle, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#eeeeee" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  gridStyle: {
    flex: 1,
    margin: 10,
    elevation: 4,
    height: 150,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.2,
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // fontStyle: ''
  },
});
