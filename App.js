import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './Loginn';
import Screen1  from './Screen1';
import Screen2 from './Screen2';
import App2 from './App2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="App2" component={App2} options={{ headerShown: false }} />
  
    </Stack.Navigator>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({

  container:{
    flex: 1,
    
  }
   
 
  
   
    
});