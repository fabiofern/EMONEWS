import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useNotificationPermission from '../components/useNotificationPermission';
import useLocationPermission from '../components/useLocationPermission';




export default function HomeScreen({ navigation }) {

    useNotificationPermission();
    useLocationPermission();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to EmoNewsApp</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('News')}>
                <Text style={styles.buttonText}>Go to News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllNews')}>
                <Text style={styles.buttonText}>Go to All News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUP')}>
                <Text style={styles.buttonText}>Go to sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIN')}>
                <Text style={styles.buttonText}>Go to sign in</Text>
            </TouchableOpacity>
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
        fontSize: 28,
        marginBottom: 20
    },
    button: {
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
});
