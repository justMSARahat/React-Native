import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}
export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 10 : 20,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: colors.primary800,
        borderRadius: 8,
        // Shadow For Android
        elevation: 4,
        //shadow for ios
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
});