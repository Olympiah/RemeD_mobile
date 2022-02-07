import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import PatientDash from "./screens/dashboard/PatientDash";
import DoctorProfileScreen from "./screens/Profiles/DoctorProfileScreen";
import PatientProfileScreen from "./screens/Profiles/PatientProfileScreen";
import ContextProvider from "./context/state";
import Notes from "./screens/Notes/Notes"
import AddNote from "./screens/Notes/AddNote"
import 'react-native-gesture-handler';
import Chat from "./screens/Chat";
import Landing from './screens/Landing';
import Signin from './screens/Loginscreens/Signin';
import Signup from './screens/Loginscreens/Signup';

// import theme from './theme'
// import { theme } from "./utils/Theme";
import useFonts from "./hooks/useFonts"
import AppLoading from "expo-app-loading"

const Stack = createNativeStackNavigator();
const Tab= createNativeStackNavigator();


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



  function Land() {
    return(
       <Tab.Navigator>
           <Tab.Screen options={{ headerShown: false }} name='Landing' component={Landing}/>
           <Tab.Screen options={{ headerShown: false }} name='Signin' component={Signin}/>
           <Tab.Screen options={{ headerShown: false }} name='Signup' component={Signup}/>
       </Tab.Navigator>
    );
 }

  return (
    <NativeBaseProvider>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Land'
              component={Land}
              options={{headerShown:false}
           }/> 
            <Stack.Screen  options={{ headerShown: false }} name="Home" component={HomeScreen} />

            <Stack.Screen options={{ headerShown: false }} name="DoctorProfile" component={DoctorProfileScreen} />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PatientProfile"
              component={PatientProfileScreen}
            />
            <Stack.Screen options={{ headerShown: false }} name="DoctorDash" component={DoctorDash} />
            <Stack.Screen options={{ headerShown: false }} name="PatientDash" component={PatientDash} />
            <Stack.Screen options={{ headerShown: false }} name="Notes" component={Notes} />
            <Stack.Screen options={{ headerShown: false }} name="AddNote" component={AddNote} />
            <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
              
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
