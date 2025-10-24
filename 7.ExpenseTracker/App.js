import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScree';
import RegisterScreen from './Screens/RegisterScree';
import ForgotPassword from './Screens/ForgotPassword';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onChangeScreen={setCurrentScreen} />;
      case 'home':
        return <HomeScreen onChangeScreen={setCurrentScreen} />;
      case 'register':
        return <RegisterScreen onChangeScreen={setCurrentScreen} />;
      case 'forgot':
        return <ForgotPassword onChangeScreen={setCurrentScreen} />;
      default:
        return <LoginScreen onChangeScreen={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ensures screens take full height
    backgroundColor: '#fff',
  },
});
