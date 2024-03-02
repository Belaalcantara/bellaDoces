import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.scroll} >

      <View style={styles.container} >

        <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho.jpg')}
          />


          <Image style={styles.fotoCafeteria}
            source={require('../../../assets/cafeteria.jpg')}
          />

          <View >
            <Text style={styles.textTitle} >Conheca mais sobre nós...</Text>
            <Text style={styles.text}>
              Estamos em Valinhos desde 2022, quando iniciamos as nossas atividades como Confeitaria BeloDOCE. Esses anos foram de muitos aprendizados, e, hoje a BellaDoces existe para oferecer uma experiência em confeitaria gourmet para você. Temos espaço kids, espaço Pet Friendly e Wi-Fi free. Trabalhamos com bolos e doces a pronta entrega e ainda várias opções para sua festa, e ainda o Bentô Cake, o bolo do momento.
            </Text>

            <Text style={styles.text}>
              Sempre entragando o melhor e mais gostoso lado da vida para nossos clietes...Nunca perca uma oportunidade de adoçar a vida, conhça BellaDoces!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Produtos")}
            >
              <Text style={styles.textDetalhe2}>Clique para ver nossos bolos:</Text>
            </TouchableOpacity>


            <View style={styles.prateleira}>
             
              <Image style={styles.foto2}
                source={require('../../../assets/doceria1.jpg')}
              />
               <TouchableOpacity
                onPress={() => navigation.navigate("Produtos")}
              >
                <Text style={styles.textDetalhe2}>Clique para ver nossas tortas:</Text>
              </TouchableOpacity>

              <Image style={styles.foto2}
                source={require('../../../assets/doceria2.jpg')}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("Produtos")}
              >
                <Text style={styles.textDetalhe2}>Clique para ver nossos doces:</Text>
              </TouchableOpacity>

              <Image style={styles.foto2}
                source={require('../../../assets/cafeteria3.jpg')}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("Produtos")}
              >
                <Text style={styles.textDetalhe2}>Clique para ver nossos cafés:</Text>
              </TouchableOpacity>
              <Image style={styles.foto2}
                source={require('../../../assets/cafes.jpg')}
              />
            </View>

            <Text style={styles.subtitle} >"Uma cafeteria é muito mais do que apenas um lugar para tomar café"
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Produtos")} >
            <Text style={styles.textDetalhe}>Clique para saber mais dos nossos produtos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View >
          <Image style={styles.foto}
            source={require('../../../assets/fundinho.jpg')}
          /></View>


      </View>
    </ScrollView>
  )
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe5f0",
    marginTop: "50px",
    justifyContent: "center",
    alignItems: "center"
  },
  foto: {
    height: "40px",
    width: "100vw",
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

  text: {
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
  textDetalhe2: {
    fontSize: "15px",
    padding: "5px",
    marginBottom: "3px",
    color: "#8e2534",
    textAlign: "center",
  },
  fotoCafeteria: {
    height: "40vh",
    width: "100vw",
    marginTop: "5px",

  },

  prateleira: {
    flexDirection: "column",
  },

  foto2: {
    width: "90vw",
    height: "30vh",
    margin: "20px",
    border: "5px ridge #b86c3e",
    borderRadius: "10px",
  },

  subtitle: {
    fontSize: "17px",
    padding: "10px",
    marginLeft: "27px",
    marginBottom: "5px",
    marginTop: "15px",
    color: "#8f6277",
    fontFamily: "designer"

  },






});
