import { TextInput, TouchableOpacity, Text, StyleSheet, View, Image, Alert, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Navigation from '../navigation';

export default function SignIN({ navigation }) {
    // const [fontsLoaded] = useFonts({
    //     'Pacifico': require('@/assets/fonts/Pacifico-Regular.ttf'),
    // });

    // if (!fontsLoaded) {
    //     return null; // rien d’autre n’est évalué avant que ce soit true
    // }

    // ✅ Maintenant on est sûr que le composant ne fait plus double render
    // const dispatch = useDispatch();
    // const router = useRouter();

    // ... (le reste de ton code, inchangé)


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');





    async function connection() { }


    return (
        <View style={styles.container}>
            <ImageBackground
                // source={require('@/assets/images/backgroungGreen.jpeg')}
                style={styles.backgroundImage}>
                <SafeAreaView style={styles.inner}>
                    {/* Header */}
                    <View style={styles.header}>

                        <Text style={styles.brand}>emoNEWS</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>Sign Up</Text>

                        {/* Inputs */}
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="email"
                            autoCapitalize='none'
                            style={styles.input}
                            placeholderTextColor="#006271"
                        />
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Username"
                            style={styles.input}
                            placeholderTextColor="#006271"
                        />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="password"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#006271"
                        />
                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="confirm password"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#006271"
                        />

                        {/* CTA Button */}
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText} onPress={() => connection()}>Sign up</Text>
                        </TouchableOpacity>

                        {/* Signup */}
                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUP')}>
                                <Text style={styles.signupLink}>log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6C2BD9',
    },
    backgroundImage: {
        flex: 1,
        backgroundColor: '#6C2BD9',
    },
    inner: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        paddingBottom: 100,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#006271',
        height: '20%',
    },
    brand: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#f7e5a7',
        fontFamily: 'Pacifico',
    },
    title: {
        fontSize: 65,
        fontWeight: '600',
        color: '#f7e5a7',
        textAlign: 'center',
        marginVertical: 30,
        fontFamily: 'Pacifico',
    },
    input: {
        backgroundColor: '#f7e5a7',
        // height: 48,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 20,
        marginBottom: 15,
        color: '#000',
        width: '85%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    forgotPassword: {
        alignItems: 'center',
        marginBottom: 28,
    },
    forgotText: {
        color: '#e3a800',
        fontSize: 20,
    },
    loginButton: {
        backgroundColor: '#006271',
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
        width: '85%',
        // height: 0,
    },
    loginText: {
        color: '#f7e5a7',
        fontSize: 30,
        fontWeight: 'bold',
        // fontFamily: 'Pacifico',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 24,
        alignItems: 'center',
    },
    signupText: {
        color: '#f7e5a7',
        fontSize: 20,
    },
    signupLink: {
        color: '#FFBE3B',
        // fontWeight: 'bold',
        fontFamily: 'Pacifico',
        fontSize: 20,
    },
    or: {
        textAlign: 'center',
        marginVertical: 16,
        color: '#fff',
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8,
    },
    socialBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});