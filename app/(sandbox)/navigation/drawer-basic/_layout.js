import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: '#FF385C',
        drawerInactiveTintColor: '#999',
        drawerStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          backgroundColor: '#FF385C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: 'Home',
          title: 'Accueil',
        }}
      />
      <Drawer.Screen
        name="user" 
        options={{
          drawerLabel: 'User',
          title: 'Utilisateur',
        }}
      />
      <Drawer.Screen
        name="settings" 
        options={{  
          drawerLabel: 'Settings',
          title: 'Paramètres',
        }}
      />
    </Drawer>
  );
}
