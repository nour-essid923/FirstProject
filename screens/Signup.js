import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native";
import { useState } from "react";
//import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const image = { uri: "https://previews.123rf.com/images/claudiodivizia/claudiodivizia1612/claudiodivizia161203100/68733964-texture-de-papier-bleu-clair-utile-comme-arri%C3%A8re-plan-vertical.jpg" };

export default function Signup(propos){
    const auth= firebase.auth();
    const[email,setEmail]=useState('');
    const[password,setpass]=useState('');
    const [confirmpassword,setconfpass]=useState('');
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
      }}> Sign Up</Text>
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

<TextInput
      keyboardType="default"
      style={styles.textInput}
      placeholder="confirm password"
      onChangeText={(text)=>{setpass(text)}}
      secureTextEntry={true}
     ></TextInput>
     
     <Button 
     onPress={()=>{auth.createUserWithEmailAndPassword(email,password)
     .then(()=>{propos.navigation.replace("Accueil")})
     .catch((err)=>{alert(err)});
}} title="submit"> </Button>
     
  
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