import { View, Text, FlatList, ImageBackground, StyleSheet ,Image} from 'react-native'
import React, { useEffect } from 'react'
import initfirebase from '../../Config';
import Profile from './Profile';


export default function Liste(propos) {
  const database=initfirebase.database();
  const ref_profiles=database.ref("profils");
  const [data,setdata]=useState();
  //const data=[{nom:"nour",
  //useEffect(())
 ref_profiles.on('valu',(dataSnapshot)=>{ let d= [];
dataSnapshot.forEach((Profile)=>{ d.push(Profile.val());}
)});setdata(d);
  return (
    <ImageBackground style={styles.container}
    source={require('../../assets/back.jpg')}>
      <Text>Liste des profiles </Text>
      
      <FlatList style={{width:"100%",height:"100%"}}
        data={data}
        renderItem={({item})=>{
          return(
            <View style={{
              height:100,weight:"100%",
              
               justifyContent:"flex-start",
               flixDirection:"row",
               borderColor:"gray",
               borderWidth:1,
               borderRadius:8,
               margin:5,
             }}><Image source={require("../../assets/profile.jpg")}
             style={{
                 height:60,
                 width:60,
               
             }}></Image>
             <Text style={{frontsize:20,frontweight:'bold'}}
             onPress={()=>{propos.navigation.navigate('chat');}}>

            {item.pseudo}</Text>
          <Text>{item.nom}</Text>
          <Text>{item.prenom}</Text>
          </View>
         
          );}}
      ></FlatList>

    </ImageBackground>
  );
 }
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justfiyContent:"flex-start",
  },
})