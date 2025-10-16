import React from 'react';
import { Text, Image, StyleSheet, Pressable, View } from 'react-native';

const Card = ({ image, title, city, price, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.card,
      pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
    ]}
  >
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.price}>{price} € / nuit</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: 320,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 5,
  },
  city: {
    fontSize: 17,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  price: {
    fontSize: 19,
    color: '#27AE60',
    fontWeight: '700',
    marginTop: 5,
  },
});

export default Card;
