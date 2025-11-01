import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { categories, movies } from "../data/data.json";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


function CategoriesDetails({ route }) {
    const name = route.params.name;
    const catid = route.params.id;

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, []);

    // fix: handle number/string mismatch safely
    const filteredMovies = movies.filter((movie) => movie.categoryId == catid);

    function MoviePreview({ item }) {
        return (
            <View style={styles.outerContainer}>
                <Pressable
                    style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
                    onPress={() => navigation.navigate("MovieDetails", { id: item.id })}
                >
                    <Image source={{ uri: item.poster_url }} style={styles.image} />

                    {/* Rating badge */}
                    <View style={styles.ratingBox}>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>

                    {/* Movie title */}
                    <Text style={styles.title}>{item.title}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={filteredMovies}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MoviePreview item={item} />}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default CategoriesDetails;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 8,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginVertical: 10,
        textAlign: "center",
    },
    listContainer: {
        paddingBottom: 24,
    },
    outerContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 12,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        overflow: "hidden",
    },
    pressable: {
        flex: 1,
        position: "relative",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.85,
    },
    image: {
        height: 180,
        width: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title: {
        fontWeight: "600",
        fontSize: 15,
        color: "#333",
        textAlign: "center",
        marginVertical: 10,
    },
    ratingBox: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 20,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    rating: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
});
