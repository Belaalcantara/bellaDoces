import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Cards = ({ item, img, frase }) => {
    return (
        <View  style={styles.containerItens}>
            <TouchableOpacity>
                <View >
                    <Text  style={styles.subtitle} >{item}</Text>
                    <Image style={styles.foto2} source={img} />
                    <Text style={styles.info} >{frase}</Text>

                </View>
            </TouchableOpacity></View>
    );
};
export default Cards;


const styles = StyleSheet.create({
    containerItens: {
        backgroundColor: "#ffe4e1"
      },

    foto2: {
        width: "90vw",
        height: "30vh",
        margin: "20px",
        border: "5px ridge #b86c3e",
        borderRadius: "10px",
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
        fontSize: "15px",
        textAlign:"center",
        padding: "5px",
        marginBottom: "15px",
        marginLeft: "4px",
     
      },
    
})