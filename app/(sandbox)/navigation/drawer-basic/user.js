import { StyleSheet, Text, View } from 'react-native';

export default function DrawerUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 User</Text>
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