import { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  function typedInput(value) {
    setInput(value);
  }

  function addGoal() {
    if (input.trim() === '') return;
    setGoals(prevGoals => [...prevGoals,
      {text: input, key: Math.random().toString()},
      ]);
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
        <FlatList data={goals} renderItem={(itemData) => {
          return(
            <View style={styles.goalsListContainer}>
              <Text style={styles.goalsList}>{itemData.item.text}</Text>
            </View>
          );
        }}/>
      </View>
    </View>
=======
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalIsvisible, setmodalIsvisible] = useState(false);

  function startAddGoalHandler() {
    setmodalIsvisible(true);
  }
  function endAddGoalHandler() {
    setmodalIsvisible(false);
  }

  function addGoal(input) {
    if (input.trim() === '') return;
    setGoals(prevGoals => [...prevGoals,
    { text: input, id: Math.random().toString() },
    ]);

    setmodalIsvisible(false);

  }
  function deleteGoalHandle(id) {
    setGoals(prevGoals => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <>

    <StatusBar style='auto'/>
    <View style={styles.mainContainer}>
      <Button title='Add New Goal' color="#eda32a" onPress={startAddGoalHandler} />
      <GoalInput
        onAddGoal={addGoal}
        visible={modalIsvisible}
        oncancle={endAddGoalHandler}
      />
      <View style={styles.outputContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandle}
              />
            );
          }} />
      </View>
    </View>
    </>
>>>>>>> 568c328 (It's 26th of September | Module 04)
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingHorizontal: 30,
    flex: 1,
  },
<<<<<<< HEAD
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
=======

  outputContainer: {
    flex: 1,
    marginTop: 20,
>>>>>>> 568c328 (It's 26th of September | Module 04)
  },
  textOutputContainer: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
<<<<<<< HEAD
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
=======


>>>>>>> 568c328 (It's 26th of September | Module 04)
});
