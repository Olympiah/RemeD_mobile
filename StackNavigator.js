import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DoctorDash from "./screens/dashboard/DoctorDash";
import PatientDash from "./screens/dashboard/PatientDash";
import DoctorProfileScreen from "./screens/Profiles/DoctorProfileScreen";
import PatientProfileScreen from "./screens/Profiles/PatientProfileScreen";
import Notes from "./screens/Notes/Notes";
import AddNote from "./screens/Notes/AddNote";
import Landing from "./screens/Landing";
import Signin from "./screens/Loginscreens/Signin";
import Signup from "./screens/Loginscreens/Signup";
import Faqs from "./screens/Others/Faqs";
import Complaints from "./screens/Others/Complaints";
import useAuth from "./hooks/useAuth";
import Doctor from './screens/Details/Doctor'
import Patient from "./screens/Details/Patient";
import DocPat from "./screens/Loginscreens/DocPat";

const Stack = createNativeStackNavigator();
const Tab = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth()
    function Land() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Landing"
                    component={Landing}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Signin"
                    component={Signin}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={Signup}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Patient"
                    component={Patient}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="DocPat"
                    component={DocPat}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Doctor"
                    component={Doctor}
                />
            </Tab.Navigator>
        );
    }

    return (
        <Stack.Navigator
        >
            {user ? (
                <Stack.Group>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={HomeScreen}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="DoctorProfile"
                        component={DoctorProfileScreen}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="PatientProfile"
                        component={PatientProfileScreen}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="DoctorDash"
                        component={DoctorDash}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="PatientDash"
                        component={PatientDash}
                    />
                    <Stack.Screen name="Complaints" component={Complaints} />
                    <Stack.Screen name="Faqs" component={Faqs} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Notes"
                        component={Notes}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="AddNote"
                        component={AddNote}
                    />
                </Stack.Group>
            ) : (
                <Stack.Screen
                    name="Land"
                    component={Land}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
