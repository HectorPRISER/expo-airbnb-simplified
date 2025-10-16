import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card.js';
import data from '../mockData.js';
import { router } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nos logements</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            city={item.city}
            price={item.price}
            onPress={() => router.push(`/detailCard/${item.id}`)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
});

export default Home;
