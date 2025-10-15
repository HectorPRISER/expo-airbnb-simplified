import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeSandbox() {
  return (
    <View>
      <Link href="navigation/" asChild>
        <Text>HomeSandbox</Text>
      </Link>
    </View>
  );
}
