import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'




export default function Torta3() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View>
      <View  style={styles.containerItens}>
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>
    

        <Itens
          item={"Torta de limao."}
          img={require("../../../assets/tortaS1.jpg")}
          sobre={" A torta perfeita com o equilibro entre o doce e o cidrico, com pedacinhos de abacaxi e corbetura de suco de abacaxi.."}
          preco={"R$ 12,80"}
  
  
        />

<View>

<TouchableOpacity
  onPress={() => navigation.navigate("BellaDoces")}
>
  <Text >Voltar para pagina inicial</Text>
</TouchableOpacity>

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


