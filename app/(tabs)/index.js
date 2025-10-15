import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Card from '../../components/Card.js';
import data from '../../mockData.js';
import { Link, router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
});


const Home = () => {  
  return (
    <View style={styles.container}>
      <Link href="../(sandbox)/home" asChild>
        <Text>Lien Sandbox</Text>
      </Link>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Card title={item.title} city={item.city} price={item.price} onPress={() => router.push({ pathname: "./viewCard", params: item})}/>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
