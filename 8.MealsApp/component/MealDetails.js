import { View, Text, StyleSheet } from 'react-native';

function MealDetails({ duration, complexity, affordability }) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{duration}m</Text>
            <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
        </View>
    );

}

export default MealDetails;


const styles = StyleSheet.create({

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
