import { Children } from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function Title({ children }) {
    return (

        <Text style={styles.title}>{children}</Text>

    );
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300,



    },
});