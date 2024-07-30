import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo,Feather,Ionicons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import MenuNote from './MenuNote';
import { MenuProvider } from 'react-native-popup-menu';


export default function NavBarTextEditor() {
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
                <Ionicons name="bookmarks" size={hp(3)} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('CalendarNote')}>
                <Entypo name="stopwatch" size={hp(3)} color="black"/>
            </TouchableOpacity>
            {/* menu */}
            <MenuProvider>
                <MenuNote/>
            </MenuProvider>
        </View>
    </View>
  )
}