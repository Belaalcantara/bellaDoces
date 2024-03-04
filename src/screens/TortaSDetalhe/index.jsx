import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'




export default function Torta1() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View>
      <View  style={styles.containerItens}>
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>
    

        <Itens
          item={"Torta de frango."}
          img={require("../../../assets/tortaS1.jpg")}
          sobre={"Torta de franco desfiado, com muitp tempeiro, milho e requeijao cremoso, azeitona e molhadinha com o molho do frango.  "}
          preco={"R$ 12,00"}
  
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


