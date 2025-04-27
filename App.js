import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainNavigator from './navigation';
import { NavigationContainer } from '@react-navigation/native'; // <- AJOUTE BIEN CECI

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer> {/* <- ENTOURE BIEN COMME CA */}
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}