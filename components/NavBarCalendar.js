import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';


export default function NavBarCalendar() {
    const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center mt-5 py-5 px-3 bg-white">
        <View className="flex-row gap-3 items-center" >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back" color={themeColors.black} size={hp(4)} />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center gap-4">
            <TouchableOpacity onPress={()=>navigation.navigate('CalendarNote')}>
                <Ionicons name="calendar-sharp" size={hp(3)} color="black"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}