import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import Background from "../components/Background";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerShown: false,
        cardOverlay: () => <Background />,

        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails}/>
      <Stack.Screen name="AppointmentCreate" component={AppointmentCreate}/>
    </Stack.Navigator>
  );
}
