import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens/Favorite";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerTransparent: true }}
    >
      <Stack.Screen
        name="FavoriteNav"
        component={Favorite}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
