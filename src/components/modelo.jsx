import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

function Itens({titulo, img, frase }) {
  return (
    <View style={style.itens}>
    <Text style={style.titulo}>{titulo}</Text>
    <Image style={style.img}>{img}</Image>
    <Text style={style.frase}>{frase}</Text>
    </View>
  )
}


const style = StyleSheet.create({
 itens:{
  backgroundColor: "black", 
 }


})



export default Itens
