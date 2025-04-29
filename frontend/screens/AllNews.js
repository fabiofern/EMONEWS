import { View, Text, StyleSheet } from 'react-native';

export default function AllNews() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>all News</Text>
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
