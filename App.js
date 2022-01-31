import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import PatientDash from "./screens/dashboard/PatientDash";
import DoctorProfileScreen from "./screens/Profiles/DoctorProfileScreen";
import PatientProfileScreen from "./screens/Profiles/PatientProfileScreen";
// import { theme } from "./utils/Theme";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
