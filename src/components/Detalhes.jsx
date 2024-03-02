import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

function Itens({item, imagem, sobre, preco}) {
  return (
    <View style={style.itens}>
    <Text style={style.item}>{item}</Text>
    <Image style={style.imagem}>{imagem}</Image>
    <Text style={style.sobre}>{sobre}</Text>
    <Text style={style.preco}>{preco}</Text>
    </View>
  )
}


const style = StyleSheet.create({
 itens:{
  flex: 1,
  backgroundColor: "#ffe5f0",
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center"
 },

 item:{
  fontSize: "30px",
  padding: "5px",
  marginLeft: "10px",
  marginBottom: "8px",
  marginTop: "20px",
  color: "#6f233f",
  fontFamily: "designer"
 },
  
 imagem:{
  width: "90vw",
  height: "30vh",
  margin: "20px",
  border: "5px ridge #b86c3e",
  borderRadius: "10px",
 },

 sobre:{
  fontSize: "18px",
  padding: "5px",
  marginBottom: "15px",
  marginLeft: "4px",
 },

  preco:{
    fontSize: "15px",
    padding: "5px",
    marginTop: "10px",
    color: "#8f6277",
    textAlign: "center",
  },





})



export default Itens
