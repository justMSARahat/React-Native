import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import Header from "../component/Header";
import Colors from "../constrains/Colors";
import PrimaryButton from "../component/PrimaryButton";

const historyData = [
    { id: '1', title: 'Income', amount: '500$' },
    { id: '2', title: 'Expense', amount: '200$' },
    { id: '3', title: 'Income', amount: '300$' },
    { id: '4', title: 'Due', amount: '100$' },
    { id: '5', title: 'Pocket', amount: '200$' },
];

function HomeScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.expenses}>
            <Text style={styles.expenseTitle}>{item.title}</Text>
            <Text style={styles.expenseMoney}>{item.amount}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header>Expense Tracker</Header>

            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={styles.topContent}>
                            <Text style={styles.title}>Hello MSA Rahat</Text>
                            <Text style={styles.subtitle}>
                                Manage your spending, track every expense, and take control of your finances.
                            </Text>
                        </View>

                        {/* Summary Boxes */}
                        <View style={styles.boxContainer}>
                            <View style={styles.containerIndividual}>
                                <Text style={styles.containerText}>500$</Text>
                                <Text style={styles.containerTitle}>Income</Text>
                            </View>
                            <View style={styles.containerIndividual}>
                                <Text style={styles.containerText}>200$</Text>
                                <Text style={styles.containerTitle}>Expense</Text>
                            </View>
                            <View style={styles.containerIndividual}>
                                <Text style={styles.containerText}>100$</Text>
                                <Text style={styles.containerTitle}>Due</Text>
                            </View>
                            <View style={styles.containerIndividual}>
                                <Text style={styles.containerText}>200$</Text>
                                <Text style={styles.containerTitle}>Pocket</Text>
                            </View>
                        </View>

                        {/* Add Statement Section */}
                        <Text style={styles.historyTitle}>Add Statement</Text>
                        <View style={styles.formContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Title (e.g., Rent, Salary)"
                                placeholderTextColor={Colors.Header_Dark}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Amount (e.g., 100$)"
                                placeholderTextColor={Colors.Header_Dark}
                                keyboardType="numeric"
                            />
                            <PrimaryButton>Add to History</PrimaryButton>
                        </View>

                        {/* History Section */}
                        <Text style={styles.historyTitle}>History</Text>
                    </>
                }
                data={historyData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },

    topContent: {
        elevation: 10,
        shadowColor: Colors.TextBlack,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        marginBottom: 20,
    },
    title: {
        color: Colors.Header_Dark,
        fontWeight: 'bold',
        fontSize: 28,
        paddingBottom: 5,
        marginTop: 10,
    },
    subtitle: {
        color: Colors.Header_Dark,
        fontSize: 13,
        borderBottomColor: Colors.Header,
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 20,
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    containerIndividual: {
        width: '48%',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        borderColor: Colors.Header_Dark,
        shadowColor: Colors.TextBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        marginBottom: 15,
    },
    containerText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.Header_Dark,
    },
    containerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.Header,
        marginTop: 10,
    },
    historyTitle: {
        color: Colors.Header_Dark,
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 5,
        borderBottomColor: Colors.Header,
        borderBottomWidth: 2,
        marginBottom: 15,
        marginTop: 20,
    },

    // New Add Statement form styles
    formContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 20,
        marginBottom: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.Header,
        fontSize: 16,
        color: Colors.Header_Dark,
        paddingVertical: 8,
        marginBottom: 20,
    },

    expenses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 12,
        borderRadius: 5,
        borderColor: Colors.Header_Dark,
        marginBottom: 10,
    },
    expenseTitle: {
        color: Colors.Header_Dark,
        fontWeight: 'bold',
        fontSize: 18,
    },
    expenseMoney: {
        color: Colors.Header_Dark,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
