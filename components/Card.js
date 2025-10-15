import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 5,
    width: 250,
  },
  title: {
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold',
  },
  city: {
    color: '#555',
  },
  price: {
    color: 'green',
    fontWeight: '600',
  },
});

const Card = ({ title, city, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.price}>{price} €</Text>
    </Pressable>
  );
};

export default Card;
