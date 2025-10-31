import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, StatusBar } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './sceeens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './sceeens/MealsOverviewScreen';
import MealDetailsScreen from './sceeens/MealDetailsScreen';

const MyStack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer >
        <MyStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <MyStack.Screen
            name='Meals Categories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }} />
          <MyStack.Screen
            name='Meals Overview'
            component={MealsOverviewScreen}
          />
          <MyStack.Screen
            name='MealsDetails'
            component={MealDetailsScreen}
          />
        </MyStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({


});
