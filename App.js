import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserListScreen from "./src/screens/UserListScreen";
import MapScreen from "./src/screens/MapScreen";

const Stack = createStackNavigator();

// Navigation Component (Modularized)
const AppNavigator = memo(() => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#6200EE" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }}>
    <Stack.Screen
      name="Users"
      component={UserListScreen}
      options={{ title: "User List" }}
    />
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{ title: "User Location" }}
    />
  </Stack.Navigator>
));

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default memo(App);
