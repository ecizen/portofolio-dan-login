import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
 // Anda perlu menginstal pustaka ini terlebih dahulu.

// Impor komponen halaman atau layar Anda.
import Screen1 from './Screen3';
import Screen2 from './Screen4';
import Screen3 from './Screen5';

const Tab = createBottomTabNavigator();

function App2() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'green', // Warna ikon dan teks saat tab aktif
          inactiveTintColor: 'gray', // Warna ikon dan teks saat tab tidak aktif
        }}
      >
        <Tab.Screen
          name="Home"
          component={Screen1}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            tabBarStyle: { backgroundColor: '#BEFFF7' }, 
            headerStyle: {
              backgroundColor: '#2A6E6C',
              elevation: 9
   // Ganti dengan warna latar belakang yang diinginkan
            },
            headerTintColor: 'white', // Ganti dengan warna teks
            headerTitleStyle: {
              fontWeight: 'bold',
            },
      
            
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{
            tabBarLabel: 'Projek',
            tabBarIcon: ({ color, size }) => (
            
              <Icon name="user" color={color} size={size} />
            ),
            tabBarStyle: { backgroundColor: '#BEFFF7' }, 
            headerStyle: {
              backgroundColor: '#2A6E6C',
              elevation: 9
   // Ganti dengan warna latar belakang yang diinginkan
            },
            
          }}
        />
          <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{
            tabBarLabel: 'Skill',
            tabBarIcon: ({ color, size }) => (
              <Icon name="code" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App2;
