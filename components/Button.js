import { View, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

export default function Button({text, textColor, bgColor, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:bgColor, width:200, flex:0, alignItems:"center", justifyContent:"center", borderCurve:"continuous", borderRadius:100, padding:10}}>
        <Text style={{fontFamily:"MontserratRegular", color:textColor, fontSize:hp(2.3)}}>{text}</Text>
    </TouchableOpacity>
  )
}