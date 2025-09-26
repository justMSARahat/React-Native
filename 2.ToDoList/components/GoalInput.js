import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Pressable, Modal, Image } from 'react-native';

function GoalInput(props) {

    const [input, setInput] = useState('');

    function typedInput(value) {
        setInput(value);
    }

    function addGoalHandler() {
        props.onAddGoal(input);
        setInput("");
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/image/1.jpg')}
                    style={styles.image}
                />
                <TextInput
                    placeholder="Your Goal"
                    style={styles.inputField}
                    onChangeText={typedInput}
                    value={input}
                />
                <View style={styles.Buttons}>
                    <Button title="Add Goal" onPress={addGoalHandler} />
                    <Button title="Cancel" onPress={props.oncancle} color="#eda32a" />

                </View>
            </View>
        </Modal>
    );

}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    Buttons: {
        flexDirection: 'row',
        gap: 30,
        marginTop: 20,
    },
    image: {
    width: 100,
    height: 100,
    margin: 20,
}
});