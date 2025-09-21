import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  function typedInput(value) {
    setInput(value);
  }

  function addGoal() {
    if (input.trim() === '') return;
    setGoals(prevGoals => [...prevGoals, input]);
    setInput('');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Goal"
          style={styles.inputField}
          onChangeText={typedInput}
          value={input}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.textOutputContainer}>Goal List:</Text>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalsListContainer}>
            <Text style={styles.goalsList}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingHorizontal: 30,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 15,
    width: '75%',
  },
  outputContainer: {
    flex: 11,
  },
  textOutputContainer: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalsListContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#eda32a',
  },
  goalsList: {
    color: 'white',
  },
});
