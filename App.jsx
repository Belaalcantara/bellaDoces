

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home/index';
import Itens from './src/screens/Itens/index';
import Cafes from './src/screens/DetalheCafes';
import Bolo from './src/screens/Bolos';
import TortaS from './src/screens/TortaSalgada';
import TortaD from './src/screens/TortaDoce';



export default function App() {
  const Stack = createNativeStackNavigator()
  return (
   
   
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="BellaDoces" component={Home}/>
        <Stack.Screen name="Produtos" component={Itens}/>
        <Stack.Screen name="Café" component={Cafes}/>
        <Stack.Screen name="Bolos" component={Bolo}/>
        <Stack.Screen name="Torta salgada" component={TortaS}/>
        <Stack.Screen name="Torta doce" component={TortaD}/>


      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
