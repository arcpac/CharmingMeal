import { useContext, useState } from "react";
import { FlatList, Text, View } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import NoAvailable from "../components/NoAvailable";
import { useSelector } from "react-redux";
function FavoriteScreen() {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  console.log(favoriteMealIds);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealCtx.ids.includes(meal.id)
  // );

  if (favoriteMeals.length === 0) {
    return <NoAvailable />;
  }

  return <MealList items={favoriteMeals} />;
}
export default FavoriteScreen;
