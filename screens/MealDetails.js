import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetailOverview from "../components/MealDetailOverview";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetails({ route, navigation }) {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  function headerButtoHandler() {
    console.log("pressed!!");
  }

  useLayoutEffect(() => {
    const icon = "staro";
    const color = "black";
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon={icon} color={color} onPress={headerButtoHandler} />
        );
      },
    });
  }, [navigation, headerButtoHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailOverview
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.innerContainer}>
        <View style={styles.subtitle}>
          <Text style={{ fontWeight: "bold" }}>Ingredients</Text>
        </View>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={{ margin: 15 }}>
            {ingredient}
          </Text>
        ))}
        <View style={styles.subtitle}>
          <Text style={{ fontWeight: "bold" }}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <Text key={step} style={{ margin: 15 }}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 32,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    marginRight: 5,
    marginLeft: 5,
    borderBottomWidth: 1,
    padding: 16,
    // backgroundColor: "#bcbcbc",
  },
});
