import { Image, Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealsItem({ id, title, imageURL, affordability, complexity, duration }) {


  const navigation = useNavigation();
  function selectmealitemhandler() {
    navigation.navigate('MealsDetails', {
      mealId: id,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        onPress={selectmealitemhandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageURL }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{duration}m</Text>
            <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealsItem;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 4, // Android shadow
    shadowColor: "black", // iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.9,
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
    color: "#222",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  infoText: {
    marginHorizontal: 6,
    fontSize: 12,
    color: "#666",
  },
});
