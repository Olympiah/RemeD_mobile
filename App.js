import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import PatientDash from "./screens/dashboard/PatientDash";
import DoctorProfileScreen from "./screens/Profiles/DoctorProfileScreen";
import PatientProfileScreen from "./screens/Profiles/PatientProfileScreen";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import ContextProvider from "./context/state";
import Notes from "./screens/Notes/Notes"
import AddNote from "./screens/Notes/AddNote"
// import theme from './theme'
// import { theme } from "./utils/Theme";
import useFonts from "./hooks/useFonts"
import AppLoading from "expo-app-loading"

const Stack = createNativeStackNavigator();

const App = () => {

  const [loaded, setLoaded] = React.useState(false)

  const loadFonts = async () => {
    await useFonts();
  }

  if (!loaded){
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => {}}
      />
    )
  }

  return (
    <NativeBaseProvider>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
            <Stack.Screen
              name="PatientProfile"
              component={PatientProfileScreen}
            />
            <Stack.Screen name="DoctorDash" component={DoctorDash} />
            <Stack.Screen name="PatientDash" component={PatientDash} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
            <Stack.Screen options={{ headerShown: false }} name="Notes" component={Notes} />
            <Stack.Screen options={{ headerShown: false }} name="AddNote" component={AddNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
