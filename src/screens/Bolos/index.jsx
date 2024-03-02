import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'


export default function Bolo() {
  const navigation = useNavigation()
  return (
    <View>
        <Text>Detlahes sobre este produto.</Text>
        <ScrollView>
    <Itens
        item={"Bolo"}
        imagem={require("../../../assets/bolo4.jpg")}
        sobre={"Bolho molhadinho na medida certa, uma explosão de sabor, pronto para saciar sua vontade de doce, temos em vitrine: chocolate, morango, e creme."}
        preco={"R$ 15,00"}
    />

    <Itens
        item={"CupCake "}
        imagem={require("../../../assets/doceBolo2.jpg")}
        sobre={"Um bolinho perfeito para viagem acompanhado de um bom café, temos de: chocolate, morango e creme."}
        preco={"R$ 8,00"}
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

const styles = StyleSheet.create({
  
})


