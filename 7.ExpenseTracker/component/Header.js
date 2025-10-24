import { StyleSheet, Text, View } from "react-native";
import Colors from "../constrains/Colors";

function Header({children, onChangeScreen}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{children}</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: Colors.Header,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.TextWhite
    }
});