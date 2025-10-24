import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constrains/Colors";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.presscontainer, styles.pressed]
                        : [styles.presscontainer]
                }
            >
                <Text style={styles.buttonText} >
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    container: {

    },
    buttonText: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        color: Colors.TextWhite,
        fontSize: 20,
        fontWeight: 'bold',
    },
    presscontainer: {
        backgroundColor: Colors.Header,
        borderRadius: 20,
    },
    pressed: {
        backgroundColor: Colors.Header_Dark,
    }




});