import { FlatList } from "react-native";
import { CATEGORIES } from "../data/Dummy-Data";
import CategoryGridTile from "../component/CategoryGridTile";

function CategoriesScreen({ navigation }) {

  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate('Meals Overview', {
        categoryId: item.id,
        categoryName: item.title,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
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

export default CategoriesScreen;
