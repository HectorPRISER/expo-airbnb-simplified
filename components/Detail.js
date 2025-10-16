import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Detail = ({ image, title, city, price, onPress }) => (
    <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.price}>{price} € / nuit</Text>
        <TouchableOpacity
            style={styles.button} onPress={() => router.push('/modal/modal')}>
            <Text style={styles.buttonText}>Réserver</Text>
        </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 250,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 8,
        textAlign: 'center',
    },
    city: {
        fontSize: 18,
        color: '#7F8C8D',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        color: '#27AE60',
        fontWeight: '700',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498DB',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },

    card: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
});

export default Detail;
