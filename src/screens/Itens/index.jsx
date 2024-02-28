import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function index() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Itens</Text>
     <Text>
        conheça nosso adorçadores de vida:
     </Text>

     
     <view>Cafés
     <Image
        source={require('../../../assets/cafes.webp')}
      />
      <Text>Uma cafeteria é muito mais do que apenas um lugar para tomar café </Text>
     </view>

     <view>Tortas (doces e salgadas)
     <Image
        source={require('../../../assets/torta1.jpg')}
      />
       <Image
        source={require('../../../assets/tortadoce.jpg')}
      />
      <Text>prática, deliciosa e que conquista pelo sabor. Com a facilidade proporcionada pelo liquidificador, esta torta se torna uma opção rápida e irresistível para qualquer refeição. A massa leve e macia preparada no liquidificador é a base ideal para o recheio cremoso e cheio de sabores do frango desfiado</Text>
     </view>
     <View>

            <Text>voltepara nossa apagina inicial</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >

                <Text>Voltar</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}