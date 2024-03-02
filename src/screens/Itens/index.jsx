import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function index() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={styles.containerItens}>
      <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho2C.jpg')}
          /></View>
        <Text style={styles.textTitle}>
          Conheça nosso adorçadores de vida!
        </Text>


        <view style={styles.container}>
         <TouchableOpacity
         onPress={() => navigation.navigate("Café")}
           >
          <Text style={styles.subtitle}>Cafés</Text>
          </TouchableOpacity> 
          
          <Image style={styles.foto2}
            source={require('../../../assets/cafes.webp')}
          />
          <Text style={styles.info} >Cafés do jeito que você quiser, quente? temos! gelado? também!</Text>
        </view>

        <view style={styles.container}>
          <TouchableOpacity
         onPress={() => navigation.navigate("Torta salgada")}
           >
          <Text style={styles.subtitle}>Tortas</Text>

             <Image style={styles.foto2}
            source={require('../../../assets/torta1.jpg')}
          />
          
          </TouchableOpacity>
          <TouchableOpacity
         onPress={() => navigation.navigate("Torta doce")}
           >
          <Image style={styles.foto2}
            source={require('../../../assets/tortadoce.jpg')}
          />
          </TouchableOpacity>


       
          <Text style={styles.info} >Tortas doces e salgadas, molhadinhas de dar agua na boca, recheio é o que não falta!</Text>
        </view >

        <TouchableOpacity
         onPress={() => navigation.navigate("Bolos")}
           >
          </TouchableOpacity> 
          <Text style={styles.subtitle}>Bolos</Text>

          <Image style={styles.foto2}
            source={require('../../../assets/bolinho.jpg')}
          />
          <Text style={styles.info} >Massas fofas e deliciosamente sabororasa!.</Text>


        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BellaDoces")}
          >
            <Text style={styles.textDetalhe} >Voltar para pagina inicial</Text>
          </TouchableOpacity>

        </View> 
        <Image style={styles.foto}
              source={require('../../../assets/fundinho2C.jpg')}/>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  containerItens: {
    backgroundColor: "#ffe4e1"
  },

  foto: {
    height: "40px",
    width: "100vw",
    opacity:"20",
  },

  foto2: {
    width: "90vw",
    height: "30vh",
    margin: "20px",
    border: "5px ridge #b86c3e",
    borderRadius: "10px",
  },

  textTitle: {
    fontSize: "30px",
    padding: "5px",
    marginLeft: "10px",
    marginBottom: "8px",
    marginTop: "20px",
    color: "#6f233f",
    fontFamily: "designer"

  },

  subtitle: {
    fontSize: "25px",
    padding: "10px",
    marginLeft:"110px",
    marginBottom: "10px",
    marginTop: "15px",
    color: "#f47edd",
    fontFamily: "designer"

  },

  info: {

    fontSize: "18px",
    padding: "5px",
    marginBottom: "15px",
    marginLeft: "4px",
  },

  textDetalhe: {
    fontSize: "15px",
    padding: "5px",
    marginTop: "10px",
    color: "#8f6277",
    textAlign: "center",
  },


})
