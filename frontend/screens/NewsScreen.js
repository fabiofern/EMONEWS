import { View, Text, StyleSheet } from 'react-native';

export default function NewsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>News Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28
    },
});
