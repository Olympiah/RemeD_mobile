import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import { CometChat } from "@cometchat-pro/react-native-chat";
import { useState, useEffect } from "react";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, []);

  const loadFonts = async () => {
    await useFonts();
  };

  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => {}}
      />
    );
  }

  const initCometChat = () => {
    const appID = "APP_ID";
    const region = "REGION";
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build();
    CometChat.init(appID, appSetting).then(
      () => {
        console.log("Initialization completed successfully");
        // You can now call login function.
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
      }
    );
  };

  return (
    <NativeBaseProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
};

export default App;
