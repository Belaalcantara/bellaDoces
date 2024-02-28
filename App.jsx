
import {  View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home/index';
import Itens from './src/screens/Itens/index';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
   
   
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="itens" component={Itens}/>

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
