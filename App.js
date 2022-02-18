import * as React from "react";
import { Platform, PermissionsAndroid } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading";
import StackNavigator from "./StackNavigator"
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
    const [loaded, setLoaded] = React.useState(false);

    const loadFonts = async () => {
        await useFonts();
    };

    const getPermissions = async () => {
        if (Platform.OS === 'android') {
            let granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]);
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                granted = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                ]);
            }
        }
    };

    React.useEffect(() => {
        getPermissions()
    }, []);

    if (!loaded) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setLoaded(true)}
                onError={() => { }}
            />
        );
    }

    return (
        <NativeBaseProvider>
            <AuthProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </AuthProvider>
        </NativeBaseProvider>
    );
}



export default App;