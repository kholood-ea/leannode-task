import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import signing from "../screens/Signing";
import HomePage from "../screens/HomePage";
import AddPlace from "../screens/Places/AddPlace";
import AllPlaces from "../screens/Places/AllPlaces";
import ViewEditPlace from "../screens/Places/ViewEditPlace";
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={signing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home Page"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Place"
        component={AddPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All Places"
        component={AllPlaces}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewEdit Place"
        component={ViewEditPlace}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
