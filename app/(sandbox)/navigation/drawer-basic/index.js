import { StyleSheet, Text, View, Button } from 'react-native';
import { router } from 'expo-router';

export default function DrawerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Home</Text>
      <Button title="Retour" onPress={router.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#FF385C',
    fontWeight: 'bold',
  },
});