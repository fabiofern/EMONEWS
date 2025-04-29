import { TextInput, TouchableOpacity, Text, StyleSheet, View, Image, Alert, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Navigation from '../navigation';

export default function SignUP({ navigation }) {
    // const [fontsLoaded] = useFonts({
    //     'Pacifico': require('@/assets/fonts/Pacifico-Regular.ttf'),
    // });

    // if (!fontsLoaded) {
    // 	return null;
    // }

    // // Tous les autres hooks viennent ensuite
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // async function connection() {

    // }


    return (
        <View style={styles.container}>
            <ImageBackground
                // source={require('@/assets/images/backgroungGreen.jpeg')}
                style={styles.backgroundImage}>
                <SafeAreaView style={styles.inner}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.brand}>EMONEWS</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>Log in</Text>

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
                            value={password}
                            onChangeText={setPassword}
                            placeholder="password"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#006271"
                        />


                        {/* Forget password */}
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotText}>Forgot password ?</Text>
                        </TouchableOpacity>

                        {/* CTA Button */}
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText} onPress={() => connection()}>log in</Text>
                        </TouchableOpacity>

                        {/* Signup */}
                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIN')}>
                                <Text style={styles.signupLink}>Sign up</Text>
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
        // paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        fontSize: 62,
        fontWeight: 'bold',
        color: '#f7e5a7',
        fontFamily: 'Pacifico',
    },
    title: {
        fontSize: 42,
        fontWeight: '600',
        color: '#f7e5a7',
        textAlign: 'center',
        marginVertical: 30,
        // fontFamily: 'Pacifico', 
    },
    input: {
        backgroundColor: '#f7e5a7',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 20,
        marginBottom: 15,
        color: '#000',
        width: '85%',
        alignItems: 'center',
        // paddingVertical: 20,
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