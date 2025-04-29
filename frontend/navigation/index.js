import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import AllNews from '../screens/AllNews';
import SignIN from '../screens/signin';
import SignUP from '../screens/signup';
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="News" component={NewsScreen} />
            <Stack.Screen name="AllNews" component={AllNews} />
            <Stack.Screen name="SignUP" component={SignUP} />
            <Stack.Screen name="SignIN" component={SignIN} />


        </Stack.Navigator>
    );
}
