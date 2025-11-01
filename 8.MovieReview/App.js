import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieCategories from './screens/MovieCategories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesDetails from './screens/CategoriesDetails'
import MoiveDetails from './screens/MoiveDetails';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Movie Reviews" component={MovieCategories} />
        <Stack.Screen name="CategoriesDetails" component={CategoriesDetails} />
        <Stack.Screen name="MovieDetails" component={MoiveDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
