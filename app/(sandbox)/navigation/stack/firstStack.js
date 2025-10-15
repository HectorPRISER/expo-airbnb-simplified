import { Button, View } from 'react-native';
import { router } from 'expo-router';

export default function FirstStack() {
  return (
    <View>
      <Button title="Home" onPress={() => router.push({ pathname: "../"})} />
    </View>
  );
}