import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'




export default function Cafe2() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View>
      <View  style={styles.containerItens}>
          <Image style={styles.foto}
            source={require('../../../assets/fundinho5.jpg')}
          /></View>
    

        <Itens
          item={"Cappuccino."}
          imagem={require("../../../assets/cappuccino.jpg")}
          sobre={"Um cappuccino cremoso para adoçar o dia ao mesmo tempo que o enche de energia, do jeito que voce mais precisa de todas as formas que quiser, sendo: fraco, medio, forte e estra forte."}
          preco={"R$ 8,00"}
  
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


