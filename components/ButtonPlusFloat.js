import { View, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ButtonPlusFloat({bgColor, onPress, iconColor}) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:bgColor, display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", borderCurve:"continuous", borderRadius:100, padding:5}}>
        <MaterialCommunityIcons name="plus-circle" size={hp(8)} color={iconColor} />
    </TouchableOpacity>
  )
}