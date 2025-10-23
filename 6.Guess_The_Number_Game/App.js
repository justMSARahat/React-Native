import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScree';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState();


  function PickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  function GameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  let screen = <StartGameScreen isNumberPicked={PickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} GameOverHandler={GameOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen rountdsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }


  return (
    <SafeAreaProvider>

      <LinearGradient
        // Background Linear Gradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.rootScreen}
      >
        <StatusBar
          style='light'
        />
        <ImageBackground
          source={require('./assets/images/1.jpg')}
          style={styles.rootScreen}
          resizeMode="cover"
          imageStyle={styles.ImageBackground}
        >

          <SafeAreaView style={styles.rootScreen} edges={['top', 'left', 'right']}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.35,
  }

});
