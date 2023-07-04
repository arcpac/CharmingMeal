import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FAVORITE, FAVORITES, MEALS } from "../data/dummy-data";
import MealDetailOverview from "../components/MealDetailOverview";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetails({ route, navigation }) {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const favoriteMealCtx = useContext(FavoritesContext);
  console.log(favoriteMealCtx);
  const mealIsFavorite = favoriteMealCtx.ids.includes(mealID);

  function favoriteMealHandler() {
    if (mealIsFavorite) {
      favoriteMealCtx.removeFavorite(mealID);
    } else {
      favoriteMealCtx.addFavorite(mealID);
    }
  }

  useLayoutEffect(() => {
    const color = "black";
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "staro"}
            color={color}
            onPress={favoriteMealHandler}
          />
        );
      },
    });
  }, [navigation, favoriteMealHandler]);

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
        <View>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.list}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.subtitle}>
          <Text style={{ fontWeight: "bold" }}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <Text key={step} style={styles.list}>
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
  list: {
    margin: 10,
  },
});
