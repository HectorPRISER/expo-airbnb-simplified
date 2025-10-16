import { StyleSheet, Text, View } from 'react-native';

export default function DrawerSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚙️ Settings</Text>
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