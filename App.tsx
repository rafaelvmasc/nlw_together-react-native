import React from "react";

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

import AppLoading from "expo-app-loading";

import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import Background from "./src/components/Background";
import { AuthContextProvider } from "./src/contexts/auth";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Background>
    );
  }
}
