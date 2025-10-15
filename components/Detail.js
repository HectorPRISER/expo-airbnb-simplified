import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 18,
    color: '#555',
  },
  price: {
    fontSize: 20,
    color: 'green',
    fontWeight: '600',
  },
});


const Detail = ({ image, title, city, price }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.city}>{city}</Text>
    <Text style={styles.price}>{price} €</Text>
  </View>
);

export default Detail;
