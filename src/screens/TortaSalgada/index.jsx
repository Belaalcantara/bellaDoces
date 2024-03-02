import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'


export default function TortaS () {
  const navigation = useNavigation()
  return (
    <View>
        <Text>Detlahes sobre este produto.</Text>
        <ScrollView>
    <Itens
        item={"Torta salgada."}
        imagem={require("../../../assets/tortaS1.jpg")}
        sobre={"Torta de franco desfiado, com muitp tempeiro, milho e requeijao cremoso, azeitona e molhadinha com o molho do frango.  "}
        preco={"R$ 12,00"}
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


