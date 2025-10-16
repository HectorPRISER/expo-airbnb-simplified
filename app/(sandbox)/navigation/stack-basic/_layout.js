import { Stack } from 'expo-router';

export default function StackBasicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FF385C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index"
        options={{ title: "Stack Basic" }}
      />
      <Stack.Screen 
        name="details"
        options={{ title: "Détails" }}
      />
    </Stack>
  );
}