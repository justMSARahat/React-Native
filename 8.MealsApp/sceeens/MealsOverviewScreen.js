import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS, CATEGORIES} from '../data/Dummy-Data';
import MealsItem from '../component/MealsItem';
import { useLayoutEffect } from 'react';


function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId;
    const catName = route.params.categoryName;

    const diplayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect ( () => {
        const catTitle = CATEGORIES.find( (cateogory) => cateogory.id === catId ).title;

        navigation.setOptions({
            title: catTitle,
        });
    },[catId,navigation]);


    function renderMealsItem(itemData) {
        return (
            <MealsItem
                title={itemData.item.title}
                imageURL={itemData.item.imageUrl}
                affordability = {itemData.item.affordability}
                complexity = {itemData.item.complexity}
                duration = {itemData.item.duration}
                id = {itemData.item.id}

            />

        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={diplayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealsItem}
            ></FlatList>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});