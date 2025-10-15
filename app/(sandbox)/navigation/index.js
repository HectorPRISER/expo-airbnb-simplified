import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Sandbox() {
  return (
    <View>
      <Link href="./navigation/stack/firstStack" asChild>
        <Text>Stack</Text>
      </Link>
      <Link href="./navigation/tabs/" asChild>
        <Text>Tabs</Text>
      </Link>
    </View>
  );
}