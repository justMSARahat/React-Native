import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/title"
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({ rountdsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!!!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/image.jpg')} />
            </View>
            <Text style={styles.summaryText}>Your Phone Needed <Text style={styles.highlightedText}>{rountdsNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}
export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlightedText: {
        fontWeight: '900',
        color: colors.primary800,
        fontSize: 24,
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    }

});