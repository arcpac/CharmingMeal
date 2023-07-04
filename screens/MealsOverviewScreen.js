import { Text, View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const categoryID = route.params.categoryID;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryID, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
