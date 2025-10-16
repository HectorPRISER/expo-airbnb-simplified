import React, { use } from 'react';
import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { router, usePathname } from 'expo-router';

export default function Count() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(`Le compteur est à : ${count}`);
    }, [count]);
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Retour" onPress={router.back} />
        </View>
    );
}