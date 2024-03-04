

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home/index';
import Itens from './src/screens/Itens/index';
import Cafes from './src/screens/DetalheCafes';
import Bolo from './src/screens/Bolos';
import Torta1 from './src/screens/TortaSDetalhe';
import Torta2 from './src/screens/Torta2Detalhes';
import Torta3 from './src/screens/Torta3Detalhes';
import BoloV from './src/screens/RedvelvetDetalhe';
import MiniBolo from './src/screens/CupcakeDetalhe';
import Cafe1 from './src/screens/Cafe1Detahe';
import Cafe2 from './src/screens/Cafe2Detalhes';
import Cafe3 from './src/screens/Cafe3Detalhes';




export default function App() {
  const Stack = createNativeStackNavigator()
  return (
   
   
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="BellaDoces" component={Home}/>
        <Stack.Screen name="Produtos" component={Itens}/>
        <Stack.Screen name="Café" component={Cafes}/>
        <Stack.Screen name="Bolos" component={Bolo}/>
        <Stack.Screen name="Torta de frango" component={Torta1}/>
        <Stack.Screen name="Torta de Abacaxi" component={Torta2}/>
        <Stack.Screen name="Torta de limao" component={Torta3}/>
        <Stack.Screen name="Red Velvet" component={BoloV}/>
        <Stack.Screen name="cupcake" component={MiniBolo}/>
        <Stack.Screen name="Espresso" component={Cafe1}/>
        <Stack.Screen name="Cappuccino" component={Cafe2}/>
        <Stack.Screen name="café Gelado" component={Cafe3}/>
       
      

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
