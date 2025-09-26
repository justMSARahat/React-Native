import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

function GoalItem(props) {
        return (
                <View style={styles.goalsListContainer}>
                        <Pressable
                                android_ripple={{ color: 'black' }}
                                onPress={props.onDeleteItem.bind(this, props.id)}
                        >
                                <Text style={styles.goalsList}>{props.text}</Text>
                        </Pressable>
                </View>
        );
};
export default GoalItem;
const styles = StyleSheet.create({
        goalsListContainer: {
                marginBottom: 10,
                borderWidth: 1,
                borderColor: '#cccccc',
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: '#eda32a',
                overflow: 'hidden',
        },
        goalsList: {
                color: 'white',
        },
});