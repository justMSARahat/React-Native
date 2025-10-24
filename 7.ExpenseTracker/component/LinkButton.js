import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constrains/Colors";

function LinkButton({ children, onPress }) {
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
export default LinkButton;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    container: {

    },
    buttonText: {
        paddingHorizontal: 40,
        paddingVertical: 5,
        color: Colors.Header_Dark,
        fontSize: 14,
        fontWeight: 'bold',
    },
    presscontainer: {
        borderRadius: 20,
    },
    pressed: {
        color: Colors.Header,
    }




});