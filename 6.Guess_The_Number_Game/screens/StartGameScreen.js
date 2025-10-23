import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({isNumberPicked}) {
    const [enterednumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInput() {
        setEnteredNumber('');
        Alert.alert('Reset Completed!', 'Enter New Value.');
    }
    function resetInputnoMsg() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enterednumber);
        if (isNaN(chosenNumber)) {
            Alert.alert(
                'Put a Number',
                'Given Value is not a Number! ',
                [{ text: 'Okay Boss', style: 'destructive', onPress: resetInputnoMsg }]
            );
        }
        else if (chosenNumber > 99 || chosenNumber < 1) {
            Alert.alert(
                'Change Number',
                'Put value between 1 to 99',
                [{ text: 'Okay Boss', style: 'destructive', onPress: resetInputnoMsg }]
            );
            return;
        }
        else {
            isNumberPicked(chosenNumber);
        }
    }

    return (
        <View style={styles.rootcontainer}>
        <View>
            <Title>Guess My Number</Title>
        </View>
            <Card>
                <InstructionText>Enter Your Favorite Number!</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value={enterednumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInput}
                        >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmInputHandler}
                        >Confirm</PrimaryButton>
                    </View>
                </View>

            </Card>
        </View >
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    rootcontainer:{
        flex: 1,
        marginTop: 70,
        alignItems: 'center'
    },


    numberInput: {
        height: 70,
        width: 70,
        fontSize: 32,
        borderBottomColor: colors.accent500 ,
        borderBottomWidth: 2,
        color: colors.accent500,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8
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