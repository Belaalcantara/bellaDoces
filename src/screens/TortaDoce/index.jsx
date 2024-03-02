import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'


export default function TortaD() {
  const navigation = useNavigation()
  return (
    <View>
        <Text>Detlahes sobre este produto.</Text>
        <ScrollView>
    <Itens
        item={"Torta de abacaxi."}
        imagem={require("../../../assets/tortsD1.jpg")}
        sobre={" A torta perfeita com o equilibro entre o doce e o cidrico, com pedacinhos de abacaxi e corbetura de suco de abacaxi.."}
        preco={"R$ 12,80"}
    />

<View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BellaDoces")}
          >
            <Text style={styles.textDetalhe} >Voltar para pagina inicial</Text>
          </TouchableOpacity>

        </View> 
    </ScrollView>
    </View>
  )
};


