import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>l'onglet Accueil</Text>
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
    gap: 15,
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#FF385C',
    fontWeight: '600',
  },
});
