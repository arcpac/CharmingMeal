import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetailOverview from "./MealDetailOverview";

function MealItem({
  id,
  title,
  ingredients,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function mealItemHandler() {
    navigation.navigate("MealDetails", { mealID: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#eeeeee" }}
        onPress={mealItemHandler}
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetailOverview duration={duration} affordability={affordability} complexity={complexity}/>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 5,
  },
 
  button: {
    flex: 1
  },
buttonPressed: {opacity: 0.9}
});
