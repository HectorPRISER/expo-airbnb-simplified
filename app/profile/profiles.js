import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Person() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profil utilisateur</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.value}>Hector Priser</Text>

        <Text style={styles.label}>Email :</Text>
        <Text style={styles.value}>hector.priser@example.com</Text>

        <Text style={styles.label}>Ville :</Text>
        <Text style={styles.value}>Rennes</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Modifier le profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: '#7F8C8D',
    fontWeight: '500',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#2C3E50',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
