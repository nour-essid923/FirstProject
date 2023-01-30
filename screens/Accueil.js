
import React from "react";
import Liste from './Fragement_home/Liste';
import Groupe from './Fragement_home/Groupe';
import Profile from './Fragement_home/Profile';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab=createMaterialBottomTabNavigator();

export default function Accueil(){
    
    
    
 return (
<Tab.Navigator>
    <Tab.Screen name="liste" component={Liste}></Tab.Screen>
    <Tab.Screen name="groupe" component={Groupe}></Tab.Screen>
    <Tab.Screen name="profil" component={Profile}></Tab.Screen>
</Tab.Navigator>

    );}