import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View>
     <View>
          <Text>conheca mais sobre nós:</Text>
          <Text>
          Estamos em Valinhos desde 2011, quando iniciamos as nossas atividades como Confeitaria Carolina Stenico. Esses anos foram de muitos aprendizados, e, hoje a Pede Um Docinho existe para oferecer uma experiência em confeitaria gourmet para você. Temos espaço kids, espaço Pet Friendly e Wi-Fi free. Trabalhamos com bolos e doces a pronta entrega e ainda várias opções para sua festa, e ainda o Bentô Cake, o bolo do momento.
          </Text>

         <Image
           source={require('../../../assets/fundinho.jpg')}
         />
          <TouchableOpacity
              onPress={() => navigation.navigate("itens")}
          >
                   <Text>Clique para saber mais dos nossos produtos:</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};
