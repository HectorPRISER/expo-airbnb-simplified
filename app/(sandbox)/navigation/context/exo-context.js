import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Création des contextes
const ThemeContext = createContext();
const UserContext = createContext(); // tu pourras l’utiliser plus tard

// Provider global
export function ExoContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook personnalisé pour accéder au thème facilement
export const useTheme = () => useContext(ThemeContext);

// Exemple de Header utilisant le thème
function Header() {
    const { theme, toggleTheme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: theme === 'light' ? '#f8f9fa' : '#222',
        },
        text: {
            color: theme === 'light' ? '#000' : '#fff',
            fontSize: 18,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mon Header ({theme} mode)</Text>
            <Button title="Changer le thème" onPress={toggleTheme} />
            <Button title="Retour" onPress={router.back} />
        </View>
    );
}

// Exemple de Footer
function Footer() {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: theme === 'light' ? '#eee' : '#111',
            alignItems: 'center',
        },
        text: {
            color: theme === 'light' ? '#000' : '#fff',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pied de page</Text>
        </View>
    );
}

export default function App() {
    return (
        <ExoContextProvider>
            <Header />
            <Footer />
        </ExoContextProvider>
    );
}
