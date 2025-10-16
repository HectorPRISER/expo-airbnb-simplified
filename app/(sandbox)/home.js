import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/drawer-basic')}>
        <Text style={styles.text}>Drawer Navigation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/modal-basic')}>
        <Text style={styles.text}>Modal Navigation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/stack-basic')}>
        <Text style={styles.text}> Stack Navigation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/tabs-basic')}>
        <Text style={styles.text}>Tabs Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/use-state')}>
        <Text style={styles.text}>Use State</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/context/exo-context')}>
        <Text style={styles.text}>Use Context</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(sandbox)/navigation/store/viewTask')}>
        <Text style={styles.text}>useTaskStore</Text>
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
    padding: 15,
    borderWidth: 2,
    borderColor: '#FF385C',
    borderRadius: 8,
    minWidth: 250,
    textAlign: 'center',
  },
});
