import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Cards from "../../components/cards";

export default function Cafes() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.containerItens}>
        <View style={styles.containerItens}>
          <Image
            style={styles.foto}
            source={require("../../../assets/fundinho5.jpg")}
          />
        </View>

        <Cards
          item={"Café espresso."}
          img={require("../../../assets/cafeEspresso.jpg")}
          frase={"Energia nunca é demais."}
        />

        <Cards
          item={"Cappuccino."}
          img={require("../../../assets/cappuccino.jpg")}
          frase={"a mistura perfeita entre correria e se deliciar com a vida."}
        />

        <Cards
          item={"Café gelado."}
          img={require("../../../assets/caféGelado.webp")}
          frase={
            "café nunca é demais, mas quando o café vem para refrescar é ainda melhor!"
          }
        />

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("BellaDoces")}>
            <Text>Voltar para pagina inicial</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerItens}>
        <Image
          style={styles.foto}
          source={require("../../../assets/fundinho5.jpg")}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  foto: {
    height: "40px",
    width: "100vw",
    opacity: "20",
  },
});
