import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
} from "react-native";
import { categories } from "../data/data.json";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";



function MovieCategories() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Movie Category",
        });
    }, []);


    function CategoryCard({ id, name, image_url }) {
        return (
            <View style={styles.outerContainer}>
                <Pressable
                    android_ripple={{ color: "#ccc" }}
                    style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
                    onPress={() =>
                        navigation.navigate("CategoriesDetails", { name, id })
                    }
                >
                    <ImageBackground
                        source={{ uri: image_url }}
                        style={styles.cardBg}
                        imageStyle={styles.image}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>
        );
    }

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <CategoryCard name={item.name} image_url={item.image_url} id={item.id} />
            )}
            contentContainerStyle={styles.listContainer}
        />
    );
}

export default MovieCategories;

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    outerContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: "#fff",
        overflow: "hidden", // ensures the rounded corners apply to image
    },
    pressable: {
        flex: 1,
    },
    pressed: {
        opacity: 0.8,
    },
    cardBg: {
        height: 160,
        justifyContent: "center", // centers vertically
        alignItems: "center", // centers horizontally
    },
    image: {
        resizeMode: "cover",
        borderRadius: 16, // round the image itself
    },
    textContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.45)", // transparent overlay for readability
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
});
