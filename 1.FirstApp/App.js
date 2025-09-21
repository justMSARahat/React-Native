import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setenteredGoalText] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  function goalInputHandler(text) {
    setenteredGoalText(text);
  }
  function addGoalHabdler() {
    setcourseGoals(currentCourseGoal => [...currentCourseGoal, enteredGoalText]);
    setenteredGoalText('');
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHabdler} />
      </View>
      <View style={styles.goalsList}>
        {courseGoals.map((goal, index) =>
          <View style={styles.outputStyle} key={index}>
            <Text style={styles.textGoal}>{goal}</Text>
          </View>
        )}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 20,
    width: '75%',
    marginRight: 5,
  },
  goalsList: {
    flex: 10,
  },
  outputStyle: {
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#cccccc',
    backgroundColor: '#5e0acc'
  },
  textGoal: {
    color: 'white',
  }

});
