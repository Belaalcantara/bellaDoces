import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Cards from '../../components/cards'


export default function Bolo() {
  const navigation = useNavigation()
  return (
    <ScrollView>
    <View>
    <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>

      
        <Cards
          item={"Bolo"}
          img={require("../../../assets/bolo4.jpg")}
          frase={"massas viviantes"}
        />
        <Cards
          item={"Cupcake"}
          img={require("../../../assets/doceBolo2.jpg")}
          frase={"massas viviantes"}
        />
        <Cards
          item={"Red velvet"}
          img={require("../../../assets/boloVermelho.jpg")}
          frase={"massas viviantes"}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BellaDoces")}
          >
            <Text >Voltar para pagina inicial</Text>
          </TouchableOpacity>

        </View>
        
        <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>
      
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({

  foto: {
    height: "40px",
    width: "100vw",
    opacity:"20",
  },

})


