import { Stack } from "expo-router";
 
export default function SandboxLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="home"
        options={{ title: "Navigation Sandbox" }}
      />
      <Stack.Screen
        name="navigation/drawer-basic"
        options={{ headerShown: false, title: "Drawer Basic" }}
      />
      <Stack.Screen
        name="navigation/modal-basic"
        options={{ headerShown: false, title: "Modal Basic" }}
      />
      <Stack.Screen
        name="navigation/stack-basic"
        options={{ headerShown: false, title: "Stack Basic" }}
      />
      <Stack.Screen
        name="navigation/tabs-basic"
        options={{ headerShown: false, title: "Tabs Basic" }}
      />
    </Stack>
  );
}