import { View, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ButtonCategorie({text, textColor, bgColor, onPress, iconColor}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:bgColor, display:"flex", flexDirection:"row", gap:6, alignItems:"center", justifyContent:"center",borderRadius:5, padding:10}}>
        <Ionicons name="grid" size={hp(2)} color={iconColor} />
        <Text style={{fontFamily:"MontserratRegular", color:textColor, fontSize:hp(1.8)}}>{text}</Text>
    </TouchableOpacity>
  )
}