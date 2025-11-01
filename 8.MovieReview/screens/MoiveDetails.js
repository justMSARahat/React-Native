import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { movies } from "../data/data.json";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function MovieDetails({ route, navigation }) {
  const movieId = route.params.id;

  const selectedMovie = movies.find((movie) => movie.id == movieId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMovie.title,
      headerStyle: { backgroundColor: "#0f0f0f" },
      headerTintColor: "white",
    });
  }, [navigation, selectedMovie]);

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: selectedMovie.poster_url }}
        style={styles.poster}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{selectedMovie.title}</Text>

        <View style={styles.metaInfo}>
          <Text style={styles.rating}>⭐ {selectedMovie.rating}/10</Text>
          <Text style={styles.director}>🎬 {selectedMovie.director}</Text>
          <Text style={styles.release}>📅 {selectedMovie.release_date}</Text>
        </View>

        <Text style={styles.sectionTitle}>Synopsis</Text>
        <Text style={styles.synopsis}>{selectedMovie.synopsis}</Text>

        <Text style={styles.sectionTitle}>Cast</Text>
        <View style={styles.castContainer}>
          {selectedMovie.cast.map((actor) => (
            <Text key={actor} style={styles.castMember}>
              • {actor}
            </Text>
          ))}
        </View>

        {selectedMovie.reviews && selectedMovie.reviews.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <View style={styles.reviewContainer}>
              {selectedMovie.reviews.map((review, index) => (
                <View key={index} style={styles.reviewBox}>
                  <Text style={styles.reviewer}>{review.user}</Text>
                  <Text style={styles.reviewRating}>⭐ {review.rating}/10</Text>
                  <Text style={styles.comment}>"{review.comment}"</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  poster: {
    width: "100%",
    height: 420,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  metaInfo: {
    alignItems: "center",
    marginBottom: 16,
    gap: 4,
  },
  rating: {
    fontSize: 16,
    color: "#ffcc00",
    fontWeight: "600",
  },
  director: {
    fontSize: 15,
    color: "#aaa",
  },
  release: {
    fontSize: 15,
    color: "#aaa",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffcc00",
    marginTop: 16,
    marginBottom: 6,
  },
  synopsis: {
    color: "#ddd",
    fontSize: 15,
    lineHeight: 22,
  },
  castContainer: {
    marginBottom: 12,
  },
  castMember: {
    color: "#fff",
    fontSize: 15,
    marginVertical: 2,
  },
  reviewContainer: {
    marginTop: 8,
  },
  reviewBox: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewer: {
    color: "#ffcc00",
    fontWeight: "bold",
  },
  reviewRating: {
    color: "#fff",
    marginVertical: 2,
  },
  comment: {
    color: "#ccc",
    fontStyle: "italic",
  },
});
