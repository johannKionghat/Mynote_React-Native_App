import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';


export default function NavBar() {
  return (
    <View className="flex-row justify-between items-center mt-5 py-5 px-3 bg-white">
        <View className="flex-row gap-3 items-center" >
            <TouchableOpacity>
                <MaterialIcons name="notes" color={themeColors.black} size={hp(5)} />
            </TouchableOpacity>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(2.5), color:themeColors.black}}>All Notes</Text>
        </View>
        <View className="flex-row justify-between items-center gap-4">
            <TouchableOpacity>
                <FontAwesome name="search" size={hp(3)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name="arrow-down-wide-short" size={hp(3)} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="calendar-sharp" size={hp(3)} color="black"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}