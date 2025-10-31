import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/Dummy-Data";
import MealDetails from "../component/MealDetails";
import { useLayoutEffect } from "react";
import IconButton from "../component/IconButton";

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function HeaderButtonPressHandler() {
        console.log("Mara");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={HeaderButtonPressHandler} icon="star" color="white"/>;
            },
        });
    }, [navigation, HeaderButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{selectedMeal.title}</Text>

                <MealDetails
                    affordability={selectedMeal.affordability}
                    complexity={selectedMeal.complexity}
                    duration={selectedMeal.duration}
                    textStyle={{ color: "#555" }}
                />

                <Text style={styles.subtitle}>Ingredients</Text>
                {selectedMeal.ingredients.map((ingredient) => (
                    <View key={ingredient} style={styles.listItem}>
                        <Text style={styles.itemText}>{ingredient}</Text>
                    </View>
                ))}

                <Text style={styles.subtitle}>Steps</Text>
                {selectedMeal.steps.map((step) => (
                    <View key={step} style={styles.listItem}>
                        <Text style={styles.itemText}>{step}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    imageContainer: {
        overflow: "hidden",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
    },
    image: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center",
        marginVertical: 16,
        color: "#333",
    },
    subtitle: {
        color: "#ff914d",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
    },
    listItem: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    itemText: {
        color: "#333",
        fontSize: 15,
    },
});
