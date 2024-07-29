import { View, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ButtonPlus({text, textColor, bgColor, onPress, iconColor}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:bgColor, width:200, display:"flex",flexDirection:"row", gap:6, alignItems:"center", justifyContent:"center", borderCurve:"continuous", borderRadius:100, padding:10}}>
        <MaterialCommunityIcons name="plus-circle" size={hp(5)} color={iconColor} />
        <Text style={{fontFamily:"MontserratRegular", color:textColor, fontSize:hp(2.3)}}>{text}</Text>
    </TouchableOpacity>
  )
}