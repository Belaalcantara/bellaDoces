import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Cards from '../../components/cards'



export default function TortaS() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View>
      <View  style={styles.containerItens}>
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>
    

        <Cards
          item={"Torta salgada."}
          img={require("../../../assets/tortaS1.jpg")}
          frase={"perfeita para uma tarde de conversa"}

        />
        <Cards
          item={"Torta  abacaxi."}
          img={require("../../../assets/tortaAbacaxi.jpg")}
          frase={"abacaxi, bolacha e chocolate, nao tem erro!"}

        />

        <Cards
          item={"Torta de limão."}
          img={require("../../../assets/TortinhaLimao.jpg")}
          frase={"o univco amargo que deveriamos sentir é de uma torta deliciosa de limão."}

        />
 

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BellaDoces")}
          >
            <Text  >Voltar para pagina inicial</Text>
          </TouchableOpacity>
          <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>

        </View>
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


