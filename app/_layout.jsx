import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
