import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Itens from '../../components/Detalhes'


export default function Cafes() {
  const navigation = useNavigation()
  return (
    <View>
        <Text>Detlahes sobre este produto.</Text>
        <ScrollView>
    <Itens
         item={"Café espresso."}
        imagem={require("../../../assets/cafeEspresso.jpg")}
        sobre={"Um café delicioso, do jeito que voce mais precisa de todas as formas que quiser, sendo: fraco, medio, forte e estra forte."}
        preco={"R$ 5,00"}
    />

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
            <Text style={styles.textDetalhe} >Voltar para pagina inicial</Text>
          </TouchableOpacity>

        </View> 
        
    </ScrollView>
    </View>
  )
};


