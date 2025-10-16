import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StackBasicIndex() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/stack-basic/details')}>
        <Text style={styles.text}>Page Détails</Text>
      </TouchableOpacity>
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
    padding: 15,
    borderWidth: 2,
    borderColor: '#FF385C',
    borderRadius: 8,
    minWidth: 250,
    textAlign: 'center',
  },
});
