import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import PatientDash from "./screens/dashboard/PatientDash"
import { theme } from "./utils/Theme";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PatientDash} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
