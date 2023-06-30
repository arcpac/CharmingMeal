import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        categoryID: itemData.item.id,
      });
    }

    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
