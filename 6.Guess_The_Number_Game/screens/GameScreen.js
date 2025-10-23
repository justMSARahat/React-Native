import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItems from "../components/game/GuessLogItems";

function generateRandomBetween(min, max, exclude) {
  let rndNum;
  do {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  } while (rndNum === exclude && max - min > 1);
  return rndNum;
}


let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, GameOverHandler }) {
  // Reset boundaries when this screen mounts
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == userNumber) {
      GameOverHandler(guessRounds.length);
    }

  }, [currentGuess, userNumber, GameOverHandler]);

  function nextGuessedHandler(direction) {
    // Detect lying
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Liar!", "You know that this is wrong...", [
        { text: "Oops! Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessedHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessedHandler.bind(this, "higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>
        <FlatList
          data={guessRounds}
          keyExtractor={(item, index) => index.toString()} // each item needs a unique key
          renderItem={({ item, index }) => (
            <GuessLogItems roundNumber={guessRoundsListLength - index} guess={item} />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },

  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
  },
});
