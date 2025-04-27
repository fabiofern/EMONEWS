import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function useLocationPermission() {
    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Location permissions were denied 📍');
            }
        })();
    }, []);
}
