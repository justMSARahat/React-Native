import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Colors from "../constrains/Colors";
import Header from "../component/Header";
import PrimaryButton from "../component/PrimaryButton";
import LinkButton from "../component/LinkButton";

function LoginScreen({ onChangeScreen }) {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Header>Login Screen</Header>

            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.formContainer}>
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.title}>Please fill out the form to login</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Username or Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Email"
                            placeholderTextColor={Colors.Header_Dark}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            inputMode="email"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Password"
                            placeholderTextColor={Colors.Header_Dark}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <PrimaryButton onPress={() => onChangeScreen('home')}>Login</PrimaryButton>

                    <View style={styles.linkButtons}>
                        <LinkButton onPress={() => onChangeScreen('forgot')}>Forgot Password</LinkButton>
                        <LinkButton onPress={() => onChangeScreen('register')}>Register New User</LinkButton>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,               // makes content fill remaining space
        justifyContent: 'center',  // centers form vertically
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    formContainer: {
        backgroundColor: '#f8f9fa',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    loginText: {
        color: Colors.Header,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.Header_Dark,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: Colors.Header,
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: Colors.Header,
        paddingVertical: 8,
        fontSize: 16,
        color: Colors.Header_Dark,
    },
    linkButtons: {
        marginTop: 10,
        alignItems: 'center',
    },
});
