import { StyleSheet, Text, View } from 'react-native';

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.text}>John Doe</Text>
      <Text style={styles.text}>john.doe@example.com</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#484848',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#FF385C',
    fontWeight: '600',
  },
});
