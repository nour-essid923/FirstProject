import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native";
import { useState } from "react";
import Signup from "./Signup";

const image = { uri: "https://previews.123rf.com/images/claudiodivizia/claudiodivizia1612/claudiodivizia161203100/68733964-texture-de-papier-bleu-clair-utile-comme-arri%C3%A8re-plan-vertical.jpg" };

export default function Auth(propos){
    
    const[email,setEmail]=useState('');
    const[password,setpass]=useState('');


    
 return (
  <View style={styles.container}>

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{
       height:300,weight:"90%",backgroundColor:"#0005",
        alignItems:"center",justifyContent:"center"
      }}>  
      <Text style={{
          fontSize:35,
          color:"white",
          fontWeight:"bold"
      }}> Authentification</Text>
      <TextInput
      keyboardType="email-address"
      placeholder="mail@gmail.com"
      onChangeText={(text)=>{setEmail(text)}}
      style={styles.textInput}
      ></TextInput>

      <TextInput
      keyboardType="default"
      style={styles.textInput}
      placeholder="password"
      onChangeText={(text)=>{setpass(text)}}
      secureTextEntry={true}
     ></TextInput>
     
     <Button title="submit"
     onPress={()=>{auth.getUser(email,password)
      .then(()=>{propos.navigation.replace("Accueil")})
      .catch((err)=>{alert(err)});
 }}></Button>
     
     <TouchableOpacity style={{
      width:"100%",
      alignItems:"center",}}> 

      <Text style={{color:"white"}} onPress={()=>{propos.navigation.navigate("signup")}}> create new user</Text>

     </TouchableOpacity>
      <StatusBar style='light'> </StatusBar>
     </View>
    </ImageBackground>
  </View>
 );}
const styles = StyleSheet.create({
    textInput:{
        backgroundColor:"white",
        width:"80%",
        height:40,
        textAlign:"center",borderRadius:10,
        margin:10,
    },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});