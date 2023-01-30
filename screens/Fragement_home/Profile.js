import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Button, TextInput ,Image} from "react-native";
import { useState } from "react";
import initfirebase from "../../Config";
import * as ImagePicker from 'expo-image-picker';
//import ImagePicker from 'react-native-image-picker/lib/commonjs';



export default async function Profile(){
    const database= initfirebase.database();
    const storage=initfirebase.storage();
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const [pseudo,setpseudo]=useState('');
    const [image,setimage]=userState(null);
    const[userId,setuserid]=usestate('');

  async function imageblob(uri){
    // const blob = await new Promise((resolve,reject)=>{
    //   const xhr= new XMLHttpRequest();
    //   xhr.onload=function(){
    //     resolve(xhr.response);
    //   };
    //   xhr.onerror=function(e){
    //     //console.log(e);
    //     reject ( new TypeError("network request failed"));
    //   };
    //   xhr.responseType="blob";
    //   xhr.open("GET",uri,true);
    //   xhr.send(null);
    // });
    // return blob;
    const resp=await fetch(uri)
    return resp.blob();
  }
   async function updateDB(){
    if(!image) return;
    const blob=await imageblob(image);
    const url=await uploadImage(blob);
    const refprofil=database.ref("profils");
    refprofil.child('profil-'+userId)
    .set({
      
      firstname,
      lastname,
      pseudo,
      url,
    })
    .then((res)=>alert("ADDED"))
    .catch((error)=>alert(error.message));

   }
  const uploadImage=async(uri)=>{

    //convertir image en blob
    //save blob into refimage 
    //get download url 
  
   const blob= await imageblob(uri);
   const ref_image=storage.ref().child("imagesprofiles").child("back.jpg");
   const task= ref_image.put(blob);
   //get download 
   //const url=await ref_image.getDownloadURL();
   return await(await task).ref.getDownloadURL();
  };
      const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
     
 return (
  <View style={styles.container}>
   
      <Text style={{
        
          fontSize:35,
          color:"white",
          fontWeight:"bold"
      }}> Profile</Text>
       <View style={{
       height:300,weight:"90%",
        alignItems:"center",justifyContent:"center"
      }}>
      <TouchableOpacity 
      onPress={()=>{pickImage();}}>
        <Image source={image===null? 
        require("../../assets/profile.jpg")
      :{uri:image}}


        style={{
            resizeMode:'contain',
            height:200,
            width:200,
            justifyContent:"center"
        }}/>
        
      </TouchableOpacity>
      
      <TextInput
      keyboardType="Text"
      placeholder=" First Name"
      onChangeText={(text)=>{setFirstName(text)}}
      style={styles.textInput}
      ></TextInput>

       <TextInput
      keyboardType="Text"
      placeholder=" First Name"
      onChangeText={(text)=>{setLastName(text)}}
      style={styles.textInput}
      ></TextInput>
      <TextInput
      keyboardType="Text"
      placeholder=" pseudo"
      onChangeText={(text)=>{setpseudo(text)}}
      style={styles.textInput}
      ></TextInput>
      
     <Button title="submit"
     onPress={()=>updateDB()}
 >Save</Button>
     
     </View>
      <StatusBar style='light'> </StatusBar>
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